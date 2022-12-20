import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {plans} from "./plans.model";
import {users_plans} from "./users_plans.model";
import {users} from "../users/users.model";
import {languages} from "../languages/languages.model";


@Injectable()
export class PlansService {
  constructor(
    @InjectSqlModel(plans) private Plans: typeof plans,
    @InjectSqlModel(users_plans) private UsersPlans: typeof users_plans,
    @InjectSqlModel(users) private Users: typeof users
  ) {
  }

  async create(id, data) {
    data.user_id = id;
    return this.Plans.create(data);
  }

  async getById(id) {
    const data = await this.Plans.findByPk(id);
    if (!data) throw new HttpException('Plan not found', HttpStatus.NOT_FOUND)
    return data;
  }

  async getList() {
    return this.Plans.findAll();
  }

  async update(id, dataUpdate) {
    await this.Plans.update(dataUpdate, {where: {id}});
    return this.getById(id);
  }

  async destroy(id) {
    const data = await this.getById(id);
    if (!data) throw new HttpException('Plan not found', HttpStatus.NOT_FOUND)
    await this.Plans.destroy({where: {id}});
    return data;
  }

  async connectedPlan(user_id, plan_id) {
    return this.UsersPlans.findOne({
      where: {user_id, plan_id},
      attributes: {exclude: ['user_id', 'plan_id']},
      include: [
        {
          model: plans,
          attributes: {exclude: ['user_id', 'plan_id']},
        }
      ]
    });
  }

  async connectedPlans(user_id) {
    return this.UsersPlans.findAll({
      where: {user_id},
      attributes: {exclude: ['user_id', 'plan_id']},
      include: [
        {
          model: plans,
          attributes: {exclude: ['user_id', 'plan_id']},
        }
      ]
    });
  }

  async connectPlan(user_id, plan_id) {
    await this.UsersPlans.create({user_id, plan_id});
    return this.connectedPlan(user_id, plan_id);
  }

  async disconnectPlan(user_id, plan_id) {
    await this.UsersPlans.destroy({where: {user_id, plan_id}});
    return this.connectedPlan(user_id, plan_id);
  }

}
