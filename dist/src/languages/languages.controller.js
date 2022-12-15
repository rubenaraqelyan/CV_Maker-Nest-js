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
exports.LanguagesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const languages_service_1 = require("./languages.service");
const main_1 = require("../swagger/main");
const main_dto_1 = require("../dto/main.dto");
const languages_1 = require("../swagger/languages");
const languages_dto_1 = require("../dto/languages.dto");
let LanguagesController = class LanguagesController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    async create(req, body) {
        const { id } = req.user;
        const data = await this.languageService.create(id, body);
        return {
            status: 'success',
            message: 'Language has been created successfully',
            data
        };
    }
    async getList(req) {
        const { id } = req.user;
        const data = await this.languageService.getList(id);
        return {
            status: 'success',
            message: 'Language list',
            data
        };
    }
    async getById(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.languageService.getById(user_id, id);
        return {
            status: 'success',
            message: 'Get language',
            data
        };
    }
    async update(req, param, body) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.languageService.update(user_id, id, body);
        return {
            status: 'success',
            message: 'Language has been updated successfully',
            data
        };
    }
    async destroy(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.languageService.destroy(user_id, id);
        return {
            status: 'success',
            message: 'Language has been removed successfully',
            data
        };
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(languages_1.createLanguageResponse),
    (0, swagger_1.ApiBody)(languages_1.createLanguageBody),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, languages_dto_1.language]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(languages_1.getLanguageResponse),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(languages_1.createLanguageResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(languages_1.createLanguageResponse),
    (0, swagger_1.ApiResponse)(languages_1.createLanguageBody),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId, languages_dto_1.language]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(languages_1.createLanguageResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "destroy", null);
LanguagesController = __decorate([
    (0, swagger_1.ApiTags)('language'),
    (0, common_1.Controller)('language'),
    __metadata("design:paramtypes", [languages_service_1.LanguagesService])
], LanguagesController);
exports.LanguagesController = LanguagesController;
//# sourceMappingURL=languages.controller.js.map