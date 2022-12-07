import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { SocketConnection } from './middlewares/socket.connection';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { UsersModule } from './users/users.module';
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
  ],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'login', method: RequestMethod.POST },
        { path: 'sign-up', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}
