import { Injectable } from '@nestjs/common';
import { InjectSqlModel } from 'src/database/inject-model-sql';
import { phone_numbers } from './phone_numbers.model';

@Injectable()
export class PhoneNumbersService {
  constructor(
    @InjectSqlModel(phone_numbers) private PhoneNumbers: typeof phone_numbers,
  ) {}
  async create(id, data) {
    data.user_id = id;
    return this.PhoneNumbers.create(data);
  }
  async getList(user_id) {
    return this.PhoneNumbers.findAll({where: {user_id}});
  }
}
