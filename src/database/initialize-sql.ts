import { SequelizeModule } from '@nestjs/sequelize';
import { users } from '../users/users.model';
import * as process from 'process';
import { Sequelize } from 'sequelize-typescript';
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

export default class db {
  static initialize() {
    return SequelizeModule.forRoot({
      dialect: 'mysql',
      host: DB_HOST,
      port: +DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
      },
      // operatorsAliases,
      models: [users],
    });
  }
  static manual() {
    return new Sequelize({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'cv_maker',
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
      },
      models: [users],
    });
  }
}
