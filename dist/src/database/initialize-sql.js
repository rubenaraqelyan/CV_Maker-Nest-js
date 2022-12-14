"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const addresses_model_1 = require("../addresses/addresses.model");
const skills_model_1 = require("../skills/skills.model");
const languages_model_1 = require("../languages/languages.model");
const bios_model_1 = require("../bios/bios.model");
const certificates_model_1 = require("../certificates/certificates.model");
const educations_model_1 = require("../educations/educations.model");
const constanst_1 = require("../utils/constanst");
const phone_numbers_model_1 = require("../phone_numbers/phone_numbers.model");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
class db {
    static initialize() {
        return sequelize_1.SequelizeModule.forRoot({
            dialect: 'mysql',
            host: DB_HOST,
            port: +DB_PORT,
            username: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
                timestamps: false
            },
            operatorsAliases: constanst_1.operatorsAliases,
            models: [
                users_model_1.users,
                addresses_model_1.addresses,
                skills_model_1.skills,
                languages_model_1.languages,
                bios_model_1.bios,
                certificates_model_1.certificates,
                educations_model_1.educations,
                phone_numbers_model_1.phone_numbers
            ],
        });
    }
}
exports.default = db;
//# sourceMappingURL=initialize-sql.js.map