import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {skills} from "./skills.model";

@Injectable()
export class SkillsService {
  constructor(
    @InjectSqlModel(skills) private Skills: typeof skills
  ) {}
  async create(id, data) {
    data.user_id = id;
    return this.Skills.create(data);
  }
  async getById(user_id, id) {
    const data = await this.Skills.findOne({where: {user_id, id}});
    if (!data) throw new HttpException('Skill not found', HttpStatus.NOT_FOUND)
    return data;
  }
  async getList(user_id) {
    return this.Skills.findAll({where: {user_id}});
  }
  async destroy(user_id, id) {
    const data = await this.getById(user_id, id);
    if (!data) throw new HttpException('Skill not found', HttpStatus.NOT_FOUND)
    await this.Skills.destroy({where: {user_id, id}});
    return data;
  }
}
