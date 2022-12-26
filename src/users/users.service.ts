import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import * as JWT from 'jsonwebtoken';
import * as uniq from 'uniqid';
import {users} from './users.model';
import {InjectSqlModel} from '../database/inject-model-sql';

const {JWT_SECRET} = process.env;
import {checkPassword, hashPassword, renderHtmlFile, writeImage} from "../utils/helpers";
import Email from "../services/Email";
import {Op} from "sequelize";
import {authData} from "../dto/auth.dto";
import {options, STRIPE_CLIENT} from "../utils/constanst";
import Stripe from "stripe";
import * as path from "path";
import HttpError from "../utils/HttpError";
import {plans} from "../plans/plans.model";
import {users_plans} from "../plans/users_plans.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectSqlModel(users) private Users: typeof users,
    @Inject(STRIPE_CLIENT) private stripe: Stripe,
  ) {
  }

  async signUp(data) {
    data.password = await hashPassword(data.password);
    const username = data.username.toLowerCase();
    const email = data.email.toLowerCase();
    data.username = username;
    data.email = email;
    await this.checkEmail(email);
    await this.checkUsernameLogin(username);
    const user = await this.Users.create(data);
    const token = this.getToken(user.id, 'verify_email');
    return this.sendVerificationEmail(data.email, token);
  }

  async signIn(data) {
    const user = await this.Users.findOne({where: {email: data.email}});
    const checkUser = user ? await checkPassword(data.password, user?.getDataValue('password')) : null;
    if (!checkUser || !user) throw new HttpException('Invalid username or password', HttpStatus.UNPROCESSABLE_ENTITY);
    if (!user.verified_at) throw new HttpException('Please verify your email', HttpStatus.UNPROCESSABLE_ENTITY);
    return user;
  }

  getToken(id, prefix = '') {
    return JWT.sign({id}, JWT_SECRET + prefix);
  }

  async verifyToken(token, prefix = '') {
    const decoded = await JWT.verify(token, JWT_SECRET + prefix);
    return decoded?.id;
  }

  async getUserById(id) {
    const user = await this.Users.findByPk(id, {
      include: [{
        model: users_plans,
        include: [
          { model: plans },
        ]
      }]
    });
    return user['dataValues'];
  }

  async update(id, data) {
    const username = data.username.toLowerCase();
    const email = data.email.toLowerCase();
    data.username = username;
    data.email = email;
    await this.checkUsername(id, username);
    await this.Users.update(data, {where: {id}});
    return this.getUserById(id);
  }

  async updatePassword(id, data) {
    data.password = await hashPassword(data.password);
    return this.Users.update(data, {where: {id}})
  }

  async checkUsername(id, username) {
    const check = await this.Users.findOne({where: {username, id: {[Op.ne]: id}}});
    if (check) throw new HttpError({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Bad request',
      messagesGroup: {username: 'Username already use'}
    });
    return true;
  }

  async checkUsernameLogin(username) {
    const check = await this.Users.findOne({where: {username}});
    if (check) throw new HttpError({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Bad request',
      messagesGroup: {username: 'Username already use'}
    });
    return true;
  }

  async checkEmail(email) {
    const check = await this.Users.findOne({where: {email}});
    if (check) throw new HttpError({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Bad request',
      messagesGroup: {email: 'Email already use'}
    });
    return true;
  }

  async findById(id) {
    const user = await this.Users.findByPk(id);
    if (!user) throw new HttpException('Invalid username or password', HttpStatus.UNPROCESSABLE_ENTITY);
    return user;
  }

  async sendVerificationEmail(email, token) {
    const direction = path.resolve('src', 'emailTemplates', 'verification.html');
    const html = await renderHtmlFile(direction, options(email, token));
    await Email.send(email, 'Please verify your email', html);
  }

  async verifyEmail(id) {
    const user = await this.getUserById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    if (user.verified_at) throw new HttpError({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Bad request',
      messagesGroup: {email: 'Email already verified'}
    });
    await this.Users.update({verified_at: new Date()}, {where: {id}});
    const token = this.getToken(id);
    return {token};
  }

  async sendForgotCodeToEmail(email) {
    const forgot_password_code = uniq.time();
    const user = await this.Users.findOne({where: {email}});
    if (user) throw new HttpError({
      statusCode: HttpStatus.NOT_FOUND,
      message: 'Bad request',
      messagesGroup: {email: 'Email not found'}
    });
    await this.Users.update({forgot_password_code}, {where: {id: user.id}})
    await this.Users.sequelize.query(`
    create event ${forgot_password_code}
     on schedule at current_timestamp + interval 5 minute
     do update users set forgot_password_code = null`);
    const html = `<h1>CV Maker</h1><div><h6>Your verification code: ${forgot_password_code}, expair 5 minute</h6></div>`;
    return Email.send(email, 'Forgot password code', html);
  }

  async acceptCodeForgotPassword(data) {
    const user = await this.Users.findOne({where: {forgot_password_code: data.code}});
    if (!user) throw new HttpError({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Bad request',
      messagesGroup: {code: 'Code is not correct'}
    });
    return this.updatePassword(user.id, {password: data.password});
  }

  async uploadAvatar(id, file) {
    const data = await writeImage(id, file);
    await this.Users.update(data, {where: {id}});
    return data;
  }

  async validateGoogleUser(params: authData) {
    const {name, email, social_id, image} = params;
    const where = {email};
    const defaults = {name, username: `user_${social_id}`, email, social_id, image, verified_at: new Date()};
    const [user] = await this.Users.findOrCreate({where, defaults});
    return user['dataValues'];
  }

}
