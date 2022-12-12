import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as JWT from 'jsonwebtoken';
import * as uniq from 'uniqid';
import { users } from './users.model';
import { InjectSqlModel } from '../database/inject-model-sql';
const {JWT_SECRET, BASE_API_URL} = process.env
import {checkPassword, hashPassword} from "../utils/helpers";
import Email from "../services/Email";

@Injectable()
export class UsersService {
  constructor(
    @InjectSqlModel(users) private Users: typeof users
  ) {}
  async signUp(data) {
    data.password = await hashPassword(data.password);
    const username = data.username.toLowerCase();
    const email = data.email.toLowerCase();
    data.username = username;
    data.email = email;
    await this.checkEmail(email);
    const user = await this.Users.create(data);
    const token = this.getToken(user.id,'verify_email');
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
  getUserById(id) {
    return this.Users.findByPk(id);
  }
  async update(id, data) {
    const username = data.username.toLowerCase();
    const email = data.email.toLowerCase();
    data.username = username;
    data.email = email;
    await this.checkUsername(id, username);
    await this.Users.update(data, { where: { id } });
    return this.getUserById(id);
  }
  async updatePassword(id, data) {
    data.password = await hashPassword(data.password);
    return this.Users.update(data,{ where: { id } })
  }
  async checkUsername(id, username) {
    const check = await this.Users.findOne({where: {username, id: {$ne: id}}});
    if (check) throw new HttpException('Username already use', HttpStatus.BAD_REQUEST);
    return true;
  }
  async checkEmail(email) {
    const check = await this.Users.findOne({where: {email}});
    if (check) throw new HttpException('Email already use', HttpStatus.BAD_REQUEST);
    return true;
  }
  async findById(id) {
    const user = await this.Users.findByPk(id);
    if (!user) throw new HttpException('Invalid username or password', HttpStatus.UNPROCESSABLE_ENTITY);
    return user;
  }
  async sendVerificationEmail(email, token) {
    const html = `<h1>CV Maker</h1><div><a href=${BASE_API_URL}/user/email-verify/${token}>Click to confirm verification</a></div>`;
    await Email.send(email, 'Please verify your email', html);
  }
  async verifyEmail(id) {
    const user = await this.getUserById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    if (user.verified_at) throw new HttpException('Your email already verified', HttpStatus.BAD_REQUEST);
    await this.Users.update({ verified_at: new Date() }, { where: { id } });
    const token = this.getToken(id);
    return {token};
  }
  async sendForgotCodeToEmail(email) {
    const forgot_password_code = uniq.time();
    const user = await this.Users.findOne({where: {email}});
    if (!user) throw new HttpException('Email not found', HttpStatus.NOT_FOUND);
    await this.Users.update({ forgot_password_code }, { where: { id: user.id } })
    await this.Users.sequelize.query(`
    create event ${user.id}
     on schedule at current_timestamp + interval 5 minute
     do update users set forgot_password_code = null`);
    const html = `<h1>CV Maker</h1><div><p>Your verification code: ${forgot_password_code}, expair 5 minute</p></div>`;
    return Email.send(email, 'Forgot password code', html);
  }
  async acceptCodeForgotPassword(data) {
    const user = await this.Users.findOne({where: {forgot_password_code: data.code}});
    if (!user) throw new HttpException('The entered code is not correct', HttpStatus.BAD_REQUEST);
    return this.updatePassword(user.id, {password: data.password});
  }

}
