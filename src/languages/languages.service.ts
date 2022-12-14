import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {languages} from "./languages.model";

@Injectable()
export class LanguagesService {
  constructor(
    @InjectSqlModel(languages) private Languages: typeof languages
  ) {}

  async create(id, data) {
    data.user_id = id;
    return this.Languages.create(data);
  }
  async getById(user_id, id) {
    const data = await this.Languages.findOne({where: {user_id, id}});
    if (!data) throw new HttpException('Language not found', HttpStatus.NOT_FOUND)
    return data;
  }
  async getList(user_id) {
    return this.Languages.findAll({where: {user_id}});
  }
  async destroy(user_id, id) {
    const data = await this.getById(user_id, id);
    if (!data) throw new HttpException('Language not found', HttpStatus.NOT_FOUND)
    await this.Languages.destroy({where: {user_id, id}});
    return data;
  }
}
