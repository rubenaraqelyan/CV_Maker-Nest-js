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
exports.CertificatesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const certificates_service_1 = require("./certificates.service");
const main_1 = require("../swagger/main");
const main_dto_1 = require("../dto/main.dto");
const certificates_1 = require("../swagger/certificates");
const certificates_dto_1 = require("../dto/certificates.dto");
let CertificatesController = class CertificatesController {
    constructor(certificatesService) {
        this.certificatesService = certificatesService;
    }
    async create(req, body) {
        const { id } = req.user;
        const data = await this.certificatesService.create(id, body);
        return {
            status: 'success',
            message: 'Certificate success created',
            data
        };
    }
    async getList(req) {
        const { id } = req.user;
        const data = await this.certificatesService.getList(id);
        return {
            status: 'success',
            message: 'Certificates list',
            data
        };
    }
    async getById(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.certificatesService.getById(user_id, id);
        return {
            status: 'success',
            message: 'Get certificate',
            data
        };
    }
    async update(req, param, body) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.certificatesService.update(user_id, id, body);
        return {
            status: 'success',
            message: 'Certificate success updated',
            data
        };
    }
    async destroy(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.certificatesService.destroy(user_id, id);
        return {
            status: 'success',
            message: 'Certificate success deleted',
            data
        };
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(certificates_1.createCertificateResponse),
    (0, swagger_1.ApiBody)(certificates_1.createCertificateBody),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, certificates_dto_1.certificates]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(certificates_1.getCertificateResponse),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(certificates_1.createCertificateResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(certificates_1.createCertificateResponse),
    (0, swagger_1.ApiBody)(certificates_1.createCertificateBody),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId, certificates_dto_1.certificates]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(certificates_1.createCertificateResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], CertificatesController.prototype, "destroy", null);
CertificatesController = __decorate([
    (0, swagger_1.ApiTags)('certificate'),
    (0, common_1.Controller)('certificate'),
    __metadata("design:paramtypes", [certificates_service_1.CertificatesService])
], CertificatesController);
exports.CertificatesController = CertificatesController;
//# sourceMappingURL=certificates.controller.js.map