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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const user_dto_1 = require("../dto/user.dto");
const users_1 = require("../swagger/users");
const main_1 = require("../swagger/main");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async signUp(body) {
        const data = await this.usersService.signUp(body);
        return {
            status: 'success',
            message: 'Verification email sent',
            data
        };
    }
    async signIn(body) {
        const data = await this.usersService.signIn(body);
        const token = this.usersService.getToken(data.id);
        return {
            status: 'success',
            message: 'User successfully login',
            data,
            token,
        };
    }
    async getMe(req) {
        const { id } = req.user;
        const data = await this.usersService.getUserById(id);
        return {
            status: 'success',
            message: 'Current user',
            data,
        };
    }
    async update(req, body) {
        const { id } = req.user;
        const data = await this.usersService.update(id, body);
        return {
            status: 'success',
            message: 'User successfully updated',
            data,
        };
    }
    async updatePassword(req, body) {
        const { id } = req.user;
        await this.usersService.updatePassword(id, body);
        return {
            status: 'success',
            message: 'Password successfully updated',
        };
    }
    async verifyUser(req, token) {
        const id = await this.usersService.verifyToken(token, 'verify_email');
        const data = await this.usersService.verifyEmail(id);
        return {
            status: 'success',
            message: 'User successfully verified',
            data
        };
    }
    async forgotPassword(req, body) {
        await this.usersService.sendForgotCodeToEmail(body.email);
        return {
            status: 'success',
            message: 'Verification code sent to your email',
        };
    }
    async acceptCodeForgotPassword(req, body) {
        await this.usersService.acceptCodeForgotPassword(body);
        return {
            status: 'success',
            message: 'Password changed',
        };
    }
};
__decorate([
    (0, common_1.Post)('/sign-up'),
    (0, swagger_1.ApiBody)(users_1.signUpBody),
    (0, swagger_1.ApiResponse)(users_1.signUpResponse),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/sign-in'),
    (0, swagger_1.ApiBody)(users_1.signInBody),
    (0, swagger_1.ApiResponse)(users_1.signInResponse),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)('/me'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(users_1.getMeResponse),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Put)('/'),
    (0, swagger_1.ApiBody)(users_1.updateBody),
    (0, swagger_1.ApiResponse)(users_1.updateResponse),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UpdateDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/password'),
    (0, swagger_1.ApiBody)(users_1.updatePasswordBody),
    (0, swagger_1.ApiResponse)((0, main_1.emptyResponse)('User response')),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.updatePassword]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.Put)('/email-verify/:token'),
    (0, swagger_1.ApiParam)({
        name: 'token',
        type: 'string'
    }),
    (0, swagger_1.ApiResponse)(users_1.verifyUserResponse),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyUser", null);
__decorate([
    (0, common_1.Post)('/forgot-password'),
    (0, swagger_1.ApiBody)(users_1.forgotPasswordBody),
    (0, swagger_1.ApiResponse)((0, main_1.emptyResponse)('User response')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.forgotPassword]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Put)('/accept-forgot-password'),
    (0, swagger_1.ApiBody)(users_1.acceptCodeForgotPasswordBody),
    (0, swagger_1.ApiResponse)((0, main_1.emptyResponse)('User response')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.acceptCodeForgotPassword]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "acceptCodeForgotPassword", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map