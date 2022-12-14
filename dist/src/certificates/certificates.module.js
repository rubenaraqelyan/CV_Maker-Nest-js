"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatesModule = void 0;
const common_1 = require("@nestjs/common");
const certificates_service_1 = require("./certificates.service");
const certificates_controller_1 = require("./certificates.controller");
const sequelize_1 = require("@nestjs/sequelize");
const certificates_model_1 = require("./certificates.model");
let CertificatesModule = class CertificatesModule {
};
CertificatesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([certificates_model_1.certificates])],
        providers: [certificates_service_1.CertificatesService],
        controllers: [certificates_controller_1.CertificatesController]
    })
], CertificatesModule);
exports.CertificatesModule = CertificatesModule;
//# sourceMappingURL=certificates.module.js.map