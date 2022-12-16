import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { SocketConnection } from './middlewares/socket.connection';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { SkillsModule } from './skills/skills.module';
import { LanguagesModule } from './languages/languages.module';
import { BiosModule } from './bios/bios.module';
import { CertificatesModule } from './certificates/certificates.module';
import { EducationsModule } from './educations/educations.module';
import { PhoneNumbersModule } from './phone_numbers/phone_numbers.module';
import { AuthModule } from './auth/auth.module';
import { PaymentMethodModule } from './payment_method/payment_methods.module';
import Sequelize from "./database/initialize-sql";

@Module({
  imports: [
    SocketConnection,
    Sequelize.initialize(),
    UsersModule,
    AuthModule,
    AddressesModule,
    SkillsModule,
    LanguagesModule,
    BiosModule,
    CertificatesModule,
    EducationsModule,
    PhoneNumbersModule,
    PaymentMethodModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: '/user/sign-in', method: RequestMethod.POST },
        { path: '/user/sign-up', method: RequestMethod.POST },
        { path: '/user/forgot-password', method: RequestMethod.POST },
        { path: '/user/accept-forgot-password', method: RequestMethod.PUT },
        { path: '/user/email-verify/:token', method: RequestMethod.PUT },
        { path: '/auth/google/login', method: RequestMethod.GET },
        { path: '/auth/google/redirect', method: RequestMethod.GET },
      ).forRoutes('*');
  }
}
