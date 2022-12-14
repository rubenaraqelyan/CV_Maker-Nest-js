"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumbersModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const phone_numbers_controller_1 = require("./phone_numbers.controller");
const phone_numbers_model_1 = require("./phone_numbers.model");
const phone_numbers_service_1 = require("./phone_numbers.service");
let PhoneNumbersModule = class PhoneNumbersModule {
};
PhoneNumbersModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([phone_numbers_model_1.phone_numbers])],
        providers: [phone_numbers_service_1.PhoneNumbersService],
        controllers: [phone_numbers_controller_1.PhoneNumbersController],
        exports: [phone_numbers_service_1.PhoneNumbersService]
    })
], PhoneNumbersModule);
exports.PhoneNumbersModule = PhoneNumbersModule;
//# sourceMappingURL=phone_numbers.module.js.map