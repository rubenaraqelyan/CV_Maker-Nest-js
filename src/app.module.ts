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
import db from './database/initialize-sql';
import {UsersService} from "./users/users.service";


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
      .apply(AuthService)
      .exclude(
        { path: '/api/users/sign-in', method: RequestMethod.POST },
        { path: '/api/users/sign-up', method: RequestMethod.POST },
      )
      .forRoutes('*');
  }
}
