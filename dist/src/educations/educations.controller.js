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
exports.EducationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const educations_service_1 = require("./educations.service");
const main_1 = require("../swagger/main");
const main_dto_1 = require("../dto/main.dto");
const educations_1 = require("../swagger/educations");
const educations_dto_1 = require("../dto/educations.dto");
let EducationsController = class EducationsController {
    constructor(educationsService) {
        this.educationsService = educationsService;
    }
    async create(req, body) {
        const { id } = req.user;
        const data = await this.educationsService.create(id, body);
        return {
            status: 'success',
            message: 'Education has been created successfully',
            data
        };
    }
    async getList(req) {
        const { id } = req.user;
        const data = await this.educationsService.getList(id);
        return {
            status: 'success',
            message: 'Educations list',
            data
        };
    }
    async getById(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.educationsService.getById(user_id, id);
        return {
            status: 'success',
            message: 'Get Education',
            data
        };
    }
    async update(req, param, body) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.educationsService.update(user_id, id, body);
        return {
            status: 'success',
            message: 'Education has been updated successfully',
            data
        };
    }
    async destroy(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.educationsService.destroy(user_id, id);
        return {
            status: 'success',
            message: 'Education has been removed successfully',
            data
        };
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(educations_1.createEducationResponse),
    (0, swagger_1.ApiBody)(educations_1.createEducationBody),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, educations_dto_1.educations]),
    __metadata("design:returntype", Promise)
], EducationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(educations_1.getEducationResponse),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EducationsController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(educations_1.createEducationResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], EducationsController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(educations_1.createEducationResponse),
    (0, swagger_1.ApiBody)(educations_1.createEducationBody),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId, educations_dto_1.educations]),
    __metadata("design:returntype", Promise)
], EducationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(educations_1.createEducationResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], EducationsController.prototype, "destroy", null);
EducationsController = __decorate([
    (0, swagger_1.ApiTags)('education'),
    (0, common_1.Controller)('education'),
    __metadata("design:paramtypes", [educations_service_1.EducationsService])
], EducationsController);
exports.EducationsController = EducationsController;
//# sourceMappingURL=educations.controller.js.map