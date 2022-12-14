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
exports.educations = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_model_1 = require("../users/users.model");
let educations = class educations extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        allowNull: false,
        primaryKey: true
    }),
    __metadata("design:type", String)
], educations.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.users),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: false,
        field: 'user_id'
    }),
    __metadata("design:type", String)
], educations.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], educations.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: "TIMESTAMP",
        allowNull: false,
    }),
    __metadata("design:type", String)
], educations.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: "TIMESTAMP",
        defaultValue: null,
        allowNull: true,
    }),
    __metadata("design:type", String)
], educations.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.users),
    __metadata("design:type", users_model_1.users)
], educations.prototype, "users", void 0);
educations = __decorate([
    sequelize_typescript_1.Table
], educations);
exports.educations = educations;
//# sourceMappingURL=educations.model.js.map