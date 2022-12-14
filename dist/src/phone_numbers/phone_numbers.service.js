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
exports.PhoneNumbersService = void 0;
const common_1 = require("@nestjs/common");
const inject_model_sql_1 = require("../database/inject-model-sql");
const phone_numbers_model_1 = require("./phone_numbers.model");
let PhoneNumbersService = class PhoneNumbersService {
    constructor(PhoneNumbers) {
        this.PhoneNumbers = PhoneNumbers;
    }
    async create(id, data) {
        data.user_id = id;
        return this.PhoneNumbers.create(data);
    }
};
PhoneNumbersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, inject_model_sql_1.InjectSqlModel)(phone_numbers_model_1.phone_numbers)),
    __metadata("design:paramtypes", [Object])
], PhoneNumbersService);
exports.PhoneNumbersService = PhoneNumbersService;
//# sourceMappingURL=phone_numbers.service.js.map