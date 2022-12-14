"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationsModule = void 0;
const common_1 = require("@nestjs/common");
const educations_controller_1 = require("./educations.controller");
const educations_service_1 = require("./educations.service");
const sequelize_1 = require("@nestjs/sequelize");
const educations_model_1 = require("./educations.model");
let EducationsModule = class EducationsModule {
};
EducationsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([educations_model_1.educations])],
        controllers: [educations_controller_1.EducationsController],
        providers: [educations_service_1.EducationsService]
    })
], EducationsModule);
exports.EducationsModule = EducationsModule;
//# sourceMappingURL=educations.module.js.map