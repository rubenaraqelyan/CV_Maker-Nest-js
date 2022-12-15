"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const JWT = require("jsonwebtoken");
const uniq = require("uniqid");
const users_model_1 = require("./users.model");
const inject_model_sql_1 = require("../database/inject-model-sql");
const { JWT_SECRET, BASE_API_URL } = process.env;
const helpers_1 = require("../utils/helpers");
const Email_1 = require("../services/Email");
let UsersService = class UsersService {
    constructor(Users) {
        this.Users = Users;
    }
    async signUp(data) {
        data.password = await (0, helpers_1.hashPassword)(data.password);
        const username = data.username.toLowerCase();
        const email = data.email.toLowerCase();
        data.username = username;
        data.email = email;
        await this.checkEmail(email);
        const user = await this.Users.create(data);
        const token = this.getToken(user.id, 'verify_email');
        return this.sendVerificationEmail(data.email, token);
    }
    async signIn(data) {
        const user = await this.Users.findOne({ where: { email: data.email } });
        const checkUser = user ? await (0, helpers_1.checkPassword)(data.password, user === null || user === void 0 ? void 0 : user.getDataValue('password')) : null;
        if (!checkUser || !user)
            throw new common_1.HttpException('Invalid username or password', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        if (!user.verified_at)
            throw new common_1.HttpException('Please verify your email', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        return user;
    }
    getToken(id, prefix = '') {
        return JWT.sign({ id }, JWT_SECRET + prefix);
    }
    async verifyToken(token, prefix = '') {
        const decoded = await JWT.verify(token, JWT_SECRET + prefix);
        return decoded === null || decoded === void 0 ? void 0 : decoded.id;
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
        data.password = await (0, helpers_1.hashPassword)(data.password);
        return this.Users.update(data, { where: { id } });
    }
    async checkUsername(id, username) {
        const check = await this.Users.findOne({ where: { username, id: { $ne: id } } });
        if (check)
            throw new common_1.HttpException('Username already use', common_1.HttpStatus.BAD_REQUEST);
        return true;
    }
    async checkEmail(email) {
        const check = await this.Users.findOne({ where: { email } });
        if (check)
            throw new common_1.HttpException('Email already use', common_1.HttpStatus.BAD_REQUEST);
        return true;
    }
    async findById(id) {
        const user = await this.Users.findByPk(id);
        if (!user)
            throw new common_1.HttpException('Invalid username or password', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        return user;
    }
    async sendVerificationEmail(email, token) {
        const html = `<h1>CV Maker</h1><div><a href=${BASE_API_URL}/user/email-verify/${token}>Click to confirm verification</a></div>`;
        await Email_1.default.send(email, 'Please verify your email', html);
    }
    async verifyEmail(id) {
        const user = await this.getUserById(id);
        if (!user)
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        if (user.verified_at)
            throw new common_1.HttpException('Your email already verified', common_1.HttpStatus.BAD_REQUEST);
        await this.Users.update({ verified_at: new Date() }, { where: { id } });
        const token = this.getToken(id);
        return { token };
    }
    async sendForgotCodeToEmail(email) {
        const forgot_password_code = uniq.time();
        const user = await this.Users.findOne({ where: { email } });
        if (!user)
            throw new common_1.HttpException('Email not found', common_1.HttpStatus.NOT_FOUND);
        await this.Users.update({ forgot_password_code }, { where: { id: user.id } });
        await this.Users.sequelize.query(`
    create event ${forgot_password_code}
     on schedule at current_timestamp + interval 5 minute
     do update users set forgot_password_code = null`);
        const html = `<h1>CV Maker</h1><div><h6>Your verification code: ${forgot_password_code}, expair 5 minute</h6></div>`;
        return Email_1.default.send(email, 'Forgot password code', html);
    }
    async acceptCodeForgotPassword(data) {
        const user = await this.Users.findOne({ where: { forgot_password_code: data.code } });
        if (!user)
            throw new common_1.HttpException('The entered code is not correct', common_1.HttpStatus.BAD_REQUEST);
        return this.updatePassword(user.id, { password: data.password });
    }
    async uploadAvatar(id, file) {
        const data = (0, helpers_1.writeImage)(id, file);
        await this.Users.update(data, { where: { id } });
        return data;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, inject_model_sql_1.InjectSqlModel)(users_model_1.users)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map