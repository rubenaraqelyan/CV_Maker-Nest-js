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
exports.PhoneNumbersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const phone_number_dto_1 = require("../dto/phone_number.dto");
const phone_numbers_service_1 = require("./phone_numbers.service");
const main_1 = require("../swagger/main");
const phone_numbers_1 = require("../swagger/phone_numbers");
let PhoneNumbersController = class PhoneNumbersController {
    constructor(phoneNumbersService) {
        this.phoneNumbersService = phoneNumbersService;
    }
    async createPhoneNumber(req, body) {
        const { id } = req.user;
        const data = await this.phoneNumbersService.create(id, body);
        return {
            status: 'success',
            message: 'Phone number has been created successfully',
            data,
        };
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiHeader)(main_1.xAuthorization),
    (0, swagger_1.ApiResponse)(phone_numbers_1.createPhoneNumberResponse),
    (0, swagger_1.ApiBody)(phone_numbers_1.createPhoneNumberBody),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, phone_number_dto_1.phone_number]),
    __metadata("design:returntype", Promise)
], PhoneNumbersController.prototype, "createPhoneNumber", null);
PhoneNumbersController = __decorate([
    (0, swagger_1.ApiTags)('phone number'),
    (0, common_1.Controller)('phone-numbers'),
    __metadata("design:paramtypes", [phone_numbers_service_1.PhoneNumbersService])
], PhoneNumbersController);
exports.PhoneNumbersController = PhoneNumbersController;
//# sourceMappingURL=phone_numbers.controller.js.map