"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const socket_connection_1 = require("./middlewares/socket.connection");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_service_1 = require("./middlewares/auth.service");
const users_module_1 = require("./users/users.module");
const addresses_module_1 = require("./addresses/addresses.module");
const skills_module_1 = require("./skills/skills.module");
const languages_module_1 = require("./languages/languages.module");
const bios_module_1 = require("./bios/bios.module");
const certificates_module_1 = require("./certificates/certificates.module");
const educations_module_1 = require("./educations/educations.module");
const phone_numbers_module_1 = require("./phone_numbers/phone_numbers.module");
const initialize_sql_1 = require("./database/initialize-sql");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_service_1.AuthService)
            .exclude({ path: '/api/user/sign-in', method: common_1.RequestMethod.POST }, { path: '/api/user/sign-up', method: common_1.RequestMethod.POST }, { path: '/api/user/forgot-password', method: common_1.RequestMethod.POST }, { path: '/api/user/accept-forgot-password', method: common_1.RequestMethod.PUT }, { path: '/api/user/email-verify/:token', method: common_1.RequestMethod.PUT }).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            socket_connection_1.SocketConnection,
            initialize_sql_1.default.initialize(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../', 'web'),
                exclude: ['/api*'],
            }),
            users_module_1.UsersModule,
            addresses_module_1.AddressesModule,
            skills_module_1.SkillsModule,
            languages_module_1.LanguagesModule,
            bios_module_1.BiosModule,
            certificates_module_1.CertificatesModule,
            educations_module_1.EducationsModule,
            phone_numbers_module_1.PhoneNumbersModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map