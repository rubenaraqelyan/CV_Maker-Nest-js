import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {plans} from "./plans.model";
import {users_plans} from "./users_plans.model";
import {users} from "../users/users.model";
import {subscriptions} from "./subscriptions.model";
import {STRIPE_CLIENT} from "../utils/constanst";
const {STRIPE_WEBHOOK_REVEAL} = process.env;
import Stripe from "stripe";
import {UsersService} from "../users/users.service";

@Injectable()
export class PlansService {
  constructor(
    @Inject(STRIPE_CLIENT) private stripe: Stripe,
    @InjectSqlModel(plans) private Plans: typeof plans,
    @InjectSqlModel(users_plans) private UsersPlans: typeof users_plans,
    @InjectSqlModel(users) private Users: typeof users,
    @InjectSqlModel(subscriptions) private Subscriptions: typeof subscriptions,
    // private readonly usersService: UsersService
  ) {
  }

  async create(data) {
    try {
      const {name, price: unit_amount} = data;
      const {id: product} = await this.stripe.products.create({name});
      const {id} = await this.stripe.prices.create({
        unit_amount,
        currency: 'usd',
        recurring: {interval: 'year'},
        product,
      });
      data.price_id = id;
      data.product_id = product;
      return this.Plans.create(data);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getById(id) {
    const data = await this.Plans.findByPk(id);
    if (!data) throw new HttpException('Plan not found', HttpStatus.NOT_FOUND)
    return data;
  }

  async getList() {
    try {
      return this.Plans.findAll();
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id, dataUpdate) {
    try {
      const {name, price: unit_amount} = dataUpdate;
      const {name: oldName, price: oldPrice, product_id: product} = await this.getById(id);

      if (name.toLowerCase() !== oldName) {
        await this.stripe.products.update(product, {name});
      }

      if (+unit_amount !== +oldPrice) {
        const {id} = await this.stripe.prices.create({
          unit_amount,
          currency: 'usd',
          recurring: {interval: 'year'},
          product,
        });
        dataUpdate.price_id = id;
      }

      await this.Plans.update(dataUpdate, {where: {id}});
      return this.getById(id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async destroy(id) {
    const data = await this.getById(id);
    if (!data) throw new HttpException('Plan not found', HttpStatus.NOT_FOUND);
    await this.stripe.products.del(data.product_id);
    await this.Plans.destroy({where: {id}});
    return data;
  }

  async connectedPlan(event) {
    const {customer} = event.object;
    // const a = await this.usersService.getUserByCustomer(customer);

    // await this.UsersPlans.create({user_id, plan_id});
    // return this.UsersPlans.findOne({
    //   where: {user_id, plan_id},
    //   attributes: {exclude: ['user_id', 'plan_id']},
    //   include: [
    //     {
    //       model: plans,
    //       attributes: {exclude: ['user_id', 'plan_id']},
    //     }
    //   ]
    // });
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

  async subscribePlan({user_id, customer, plan_id, pm_id}) {
    try {
      const {price_id: price, price: amount} = await this.getById(plan_id);
      const sub = await this.stripe.subscriptions.create({
        customer,
        items: [{price}],
        payment_behavior: 'default_incomplete'
      });

      const {id} = await this.stripe.paymentIntents.create({
        customer,
        payment_method: pm_id,
        amount: +(amount + '0'),
        currency: 'usd',
        payment_method_types: ['card'],
      });

      await this.stripe.paymentIntents.confirm(id, {
        payment_method: pm_id
      });

      return this.Subscriptions.create({
        user_id,
        plan_id,
        sub_id: sub.id,
        expired: new Date(sub.current_period_end * 1000),
        status: sub.status,
        discount: sub?.discount?.coupon?.percent_off || null,
        cancel_at: sub.cancel_at_period_end
      })

    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async webhook(req){
    const event = await this.stripe.webhooks.constructEvent(
      req.rawBody,
      req.headers['stripe-signature'],
      STRIPE_WEBHOOK_REVEAL
    );
    // switch(event.type) {
    //   case x: return await this.connectedPlan(event)
    //   case y:
    //     // code block
    //     break;
    //   default: return
    // }
    console.log(event)
    // await this.UsersPlans.create({user_id, plan_id});
    // return this.connectedPlan(user_id, plan_id);
  }



  async disconnectPlan(user_id, plan_id) {
    await this.UsersPlans.destroy({where: {user_id, plan_id}});
    // return this.connectedPlan(user_id, plan_id);
  }

}
