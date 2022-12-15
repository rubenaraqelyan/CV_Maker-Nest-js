import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { SocketConnection } from './middlewares/socket.connection';
import { AuthService } from './middlewares/auth.service';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { SkillsModule } from './skills/skills.module';import { LanguagesModule } from './languages/languages.module';
import { BiosModule } from './bios/bios.module';
import { CertificatesModule } from './certificates/certificates.module';
import { EducationsModule } from './educations/educations.module';
import { PhoneNumbersModule } from './phone_numbers/phone_numbers.module';
import Sequelize from "./database/initialize-sql";

@Module({
  imports: [
    SocketConnection,
    Sequelize.initialize(),
    UsersModule,
    AddressesModule,
    SkillsModule,
    LanguagesModule,
    BiosModule,
    CertificatesModule,
    EducationsModule,
    PhoneNumbersModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthService)
      .exclude(
        { path: '/api/user/sign-in', method: RequestMethod.POST },
        { path: '/api/user/sign-up', method: RequestMethod.POST },
        { path: '/api/user/forgot-password', method: RequestMethod.POST },
        { path: '/api/user/accept-forgot-password', method: RequestMethod.PUT },
        { path: '/api/user/email-verify/:token', method: RequestMethod.PUT },
      ).forRoutes('*');
  }
}
