import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { users } from './users.model';
import { InjectSqlModel } from '../database/inject-model-sql';
import {checkPassword, hashPassword} from "../utils/helpers";

@Injectable()
export class UsersService {
  constructor(
    @InjectSqlModel(users) private Users: typeof users,
  ) {}
  async signUp(data) {
    data.password = await hashPassword(data.password);
    return this.Users.create(data);
  }

  async signIn(data) {
    const user = await this.Users.findOne(data);
    if (!user) throw new HttpException('Invalid username or password', HttpStatus.UNPROCESSABLE_ENTITY);
    const checkUser = await checkPassword(data.password, user.getDataValue('password'));
    if (!checkUser) throw new HttpException('Invalid username or password', HttpStatus.UNPROCESSABLE_ENTITY);
    return user;
  }

  async findById(id) {
    const user = await this.Users.findByPk(id);
    if (!user) throw new HttpException('Invalid username or password', HttpStatus.UNPROCESSABLE_ENTITY);
    return user;
  }

}
