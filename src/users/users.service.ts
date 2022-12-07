import { Injectable } from '@nestjs/common';
import { SocketConnection } from '../middlewares/socket.connection';
import { UsersDto } from '../dto/users.dto';
import { Users } from './users.model';
import { InjectSqlModel } from '../database/inject-model-sql';
import db from '../database/initialize-sql';

@Injectable()
export class UsersService {
  constructor(
    @InjectSqlModel(Users) private usersSql: typeof Users, // private test:Anunuy // @Inject('USERS_REPOSITORY') private users: typeof Users
  ) {}
  async create(data) {
    // throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    // return SocketConnection.emit('1','test', {
    //     message: 'hello'
    // })
    // const test = await db.manual().query('SELECT * FROM `users` WHERE name OR age LIKE \'%18%\' LIMIT 2', {nest: true})
    const test = await db
      .manual()
      .query(
        'SELECT tr.*, tr.nick_name AS nick, INTO tts, tob.title FROM trainers AS tr INNER JOIN toolkits AS tob ON tr.id = tob.trainer_id',
        { nest: true },
      );
    // const test = await this.usersSql.findAll()
    console.log(test);
    return test;
    // await this.usersMongo.create(data);
    // return await this.usersSql.create(data);
  }
}
