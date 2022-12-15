import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { users } from '../users/users.model';
import {UsersService} from "../users/users.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: users, done: Function) {
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.usersService.getUserById(payload.id);
    return user ? done(null, user) : done(null, null);
  }

}