import { Injectable } from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {users} from "../users/users.model";

@Injectable()
export class AuthService {
  constructor(
    @InjectSqlModel(users) private Users: typeof users
  ) {}

  async validateUser(details: {id: string, email: string, name: string, image: string }) {
    const {name, email, image} = details;
    console.log('AuthService');
    console.log(details);
    const user = await this.Users.findOne({where: { email: details.email }});
    console.log(user);
    if (user) return user;
    console.log('User not found. Creating...');
    return this.Users.create({name, username: Date.now(), email, password: 123456, socials: [], image});
  }

  async findUser(id: string) {
    return this.Users.findByPk(id);
  }
}
