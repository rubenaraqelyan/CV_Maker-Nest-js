import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {STRIPE_CLIENT} from '../utils/constanst';
import Stripe from 'stripe';
import {InjectSqlModel} from '../database/inject-model-sql';
import {payment_methods} from './payment_methods.model';
import {users} from "../users/users.model";

@Injectable()
export class PaymentMethodService {
  constructor(
    @Inject(STRIPE_CLIENT) private stripe: Stripe,
    @InjectSqlModel(payment_methods)
    private PaymentMethods: typeof payment_methods,
    @InjectSqlModel(users)
    private Users: typeof users,
  ) {
  }

  async checkCustomer(data) {
    return this.Users.findOne(data);
  }

  async updateCustomer(customer_id, data) {
    return this.Users.update({customer_id}, {where: data});
  }

  async getCustomer(data) {
    const customerDB = await this.checkCustomer(data);
    const customer_id = customerDB.customer_id;
    const checkInStripe = await this.stripe.customers.retrieve(customer_id).catch(() => console.info('createCustomer -> ⚠-Customer not found-⚠'));
    if (customer_id && checkInStripe) return customerDB;
    const customer: Stripe.Customer = await this.stripe.customers.create(data);
    await this.updateCustomer(customer.id, data);
    customerDB.customer_id = customer.id;
    return customerDB;
  }

  async createPaymentMethod({user_id, customer, type, number, exp_month, exp_year, cvc}) {
    try {
      const {id: pm_id} = await this.stripe.paymentMethods.create({
        type,
        card: {
          number,
          exp_month,
          exp_year,
          cvc,
        },
      });

      await this.stripe.paymentMethods.attach(pm_id,{customer});

      return this.PaymentMethods.create({
        user_id,
        pm_id,
        exp_month,
        exp_year,
      });

    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getList(user_id) {
    return this.PaymentMethods.findAll({where: {user_id}});
  }

  async getById(user_id, id) {
    const data = await this.PaymentMethods.findOne({where: {user_id, id}});
    if (!data)
      throw new HttpException('Payment method not found', HttpStatus.NOT_FOUND);
    return data;
  }

  async destroy(user_id, id) {
    const data = await this.getById(user_id, id);
    if (!data)
      throw new HttpException('Payment method not found', HttpStatus.NOT_FOUND);
    await this.PaymentMethods.destroy({where: {user_id, id}});
    return data;
  }
}
