import { SequelizeModule } from '@nestjs/sequelize';
import { users } from '../users/users.model';
import { addresses } from '../addresses/addresses.model';
import {skills} from "../skills/skills.model";
import {languages} from "../languages/languages.model";
import {bios} from "../bios/bios.model";
import {certificates} from "../certificates/certificates.model";
import {educations} from "../educations/educations.model";
import { phone_numbers } from 'src/phone_numbers/phone_numbers.model';
import {payment_methods} from "../payment_method/payment_methods.model";
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

export default class Sequelize {
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
      models: [
        users,
        addresses,
        skills,
        languages,
        bios,
        certificates,
        educations,
        phone_numbers,
        payment_methods,
      ],
    });
  }
}
