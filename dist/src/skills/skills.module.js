"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsModule = void 0;
const common_1 = require("@nestjs/common");
const skills_service_1 = require("./skills.service");
const sequelize_1 = require("@nestjs/sequelize");
const skills_model_1 = require("./skills.model");
const skills_controller_1 = require("./skills.controller");
let SkillsModule = class SkillsModule {
};
SkillsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([skills_model_1.skills])],
        providers: [skills_service_1.SkillsService],
        controllers: [skills_controller_1.SkillsController],
    })
], SkillsModule);
exports.SkillsModule = SkillsModule;
//# sourceMappingURL=skills.module.js.map