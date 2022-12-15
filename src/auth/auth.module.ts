import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { SessionSerializer } from './utils/Serializer';
import {SequelizeModule} from "@nestjs/sequelize";
import {users} from "../users/users.model";
import { UsersService } from '../users/users.service';

@Module({
  imports: [SequelizeModule.forFeature([users])],
  controllers: [AuthController],
  providers: [
    GoogleStrategy,
    SessionSerializer,
    UsersService,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}