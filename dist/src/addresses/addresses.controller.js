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
exports.AddressesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const addresses_service_1 = require("./addresses.service");
const main_dto_1 = require("../dto/main.dto");
const addresses_1 = require("../swagger/addresses");
const address_dto_1 = require("../dto/address.dto");
const main_1 = require("../swagger/main");
let AddressesController = class AddressesController {
    constructor(addressesService) {
        this.addressesService = addressesService;
    }
    async getList(req) {
        const { id } = req.user;
        const data = await this.addressesService.getList(id);
        return {
            status: 'success',
            message: 'Get addresses',
            data
        };
    }
    async create(req, body) {
        const { id } = req.user;
        const data = await this.addressesService.create(id, body);
        return {
            status: 'success',
            message: 'Address success created',
            data
        };
    }
    async getById(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.addressesService.getById(user_id, id);
        return {
            status: 'success',
            message: 'Get address',
            data
        };
    }
    async update(req, body, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.addressesService.update(user_id, id, body);
        return {
            status: 'success',
            message: 'Address success updated',
            data
        };
    }
    async destroy(req, param) {
        const { id: user_id } = req.user;
        const { id } = param;
        const data = await this.addressesService.destroy(user_id, id);
        return {
            status: 'success',
            message: 'Address success deleted',
            data
        };
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(addresses_1.getAddressesResponse),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "getList", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiBody)(addresses_1.createAddressBody),
    (0, swagger_1.ApiResponse)(addresses_1.createAddressResponse),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, address_dto_1.address]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(addresses_1.createAddressResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiBody)(addresses_1.createAddressBody),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(addresses_1.createAddressResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, address_dto_1.address, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(addresses_1.createAddressResponse),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string'
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, main_dto_1.uuId]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "destroy", null);
AddressesController = __decorate([
    (0, swagger_1.ApiTags)('address'),
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [addresses_service_1.AddressesService])
], AddressesController);
exports.AddressesController = AddressesController;
//# sourceMappingURL=addresses.controller.js.map