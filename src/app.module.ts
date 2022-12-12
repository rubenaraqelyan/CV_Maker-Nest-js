import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { SocketConnection } from './middlewares/socket.connection';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthService } from './middlewares/auth.service';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import db from './database/initialize-sql';

@Module({
  imports: [
    SocketConnection,
    db.initialize(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'web'),
      exclude: ['/api*'],
    }),
    UsersModule,
    AddressesModule,
  ],
  providers: [],
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
      )
      .forRoutes('*');
  }
}
