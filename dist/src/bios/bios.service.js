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
exports.BiosService = void 0;
const common_1 = require("@nestjs/common");
const inject_model_sql_1 = require("../database/inject-model-sql");
const bios_model_1 = require("./bios.model");
let BiosService = class BiosService {
    constructor(Bios) {
        this.Bios = Bios;
    }
    async create(id, data) {
        data.user_id = id;
        return this.Bios.create(data);
    }
    async getById(user_id, id) {
        const data = await this.Bios.findOne({ where: { user_id, id } });
        if (!data)
            throw new common_1.HttpException('Bio not found', common_1.HttpStatus.NOT_FOUND);
        return data;
    }
    async getList(user_id) {
        return this.Bios.findAll({ where: { user_id } });
    }
    async update(user_id, id, dataUpdate) {
        await this.Bios.update(dataUpdate, { where: { user_id, id } });
        return this.getById(user_id, id);
    }
    async destroy(user_id, id) {
        const data = await this.getById(user_id, id);
        await this.Bios.destroy({ where: { user_id, id } });
        return data;
    }
};
BiosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, inject_model_sql_1.InjectSqlModel)(bios_model_1.bios)),
    __metadata("design:paramtypes", [Object])
], BiosService);
exports.BiosService = BiosService;
//# sourceMappingURL=bios.service.js.map