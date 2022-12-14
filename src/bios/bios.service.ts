import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {bios} from "./bios.model";

@Injectable()
export class BiosService {
  constructor(
    @InjectSqlModel(bios) private Bios: typeof bios
  ) {}

  async create(id, data) {
    data.user_id = id;
    return this.Bios.create(data);
  }
  async getById(user_id, id) {
    const data = await this.Bios.findOne({where: {user_id, id}});
    if (!data) throw new HttpException('Bio not found', HttpStatus.NOT_FOUND)
    return data;
  }
  async getList(user_id) {
    return this.Bios.findAll({where: {user_id}});
  }
  async destroy(user_id, id) {
    const data = await this.getById(user_id, id);
    if (!data) throw new HttpException('Bio not found', HttpStatus.NOT_FOUND)
    await this.Bios.destroy({where: {user_id, id}});
    return data;
  }
}
