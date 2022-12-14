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
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const addresses_model_1 = require("../addresses/addresses.model");
const skills_model_1 = require("../skills/skills.model");
const languages_model_1 = require("../languages/languages.model");
const bios_model_1 = require("../bios/bios.model");
const certificates_model_1 = require("../certificates/certificates.model");
const educations_model_1 = require("../educations/educations.model");
let users = class users extends sequelize_typescript_1.Model {
    get socials() {
        return JSON.parse(this.getDataValue("socials"));
    }
    set socials(value) {
        this.setDataValue("socials", JSON.stringify(value));
    }
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    }),
    __metadata("design:type", String)
], users.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], users.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], users.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], users.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
        get: () => null,
    }),
    __metadata("design:type", String)
], users.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
        defaultValue: "",
    }),
    __metadata("design:type", String)
], users.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.JSON,
        allowNull: false,
        defaultValue: '[]',
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], users.prototype, "socials", null);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        defaultValue: null,
    }),
    __metadata("design:type", String)
], users.prototype, "forgot_password_code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: "TIMESTAMP",
        allowNull: true,
        defaultValue: null,
    }),
    __metadata("design:type", String)
], users.prototype, "verified_at", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => addresses_model_1.addresses),
    __metadata("design:type", Array)
], users.prototype, "addresses", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => skills_model_1.skills),
    __metadata("design:type", Array)
], users.prototype, "skills", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => languages_model_1.languages),
    __metadata("design:type", Array)
], users.prototype, "languages", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => bios_model_1.bios),
    __metadata("design:type", Array)
], users.prototype, "bios", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => certificates_model_1.certificates),
    __metadata("design:type", Array)
], users.prototype, "certificates", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => educations_model_1.educations),
    __metadata("design:type", Array)
], users.prototype, "educations", void 0);
users = __decorate([
    sequelize_typescript_1.Table
], users);
exports.users = users;
//# sourceMappingURL=users.model.js.map