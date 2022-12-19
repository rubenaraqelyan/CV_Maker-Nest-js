import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { STRIPE_CLIENT } from '../utils/constanst';
import Stripe from 'stripe';
import { InjectSqlModel } from '../database/inject-model-sql';
import { payment_methods } from './payment_methods.model';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
@Injectable()
export class PaymentMethodService {
  constructor(
    @Inject(STRIPE_CLIENT) private stripe: Stripe,
    @InjectSqlModel(payment_methods)
    private PaymentMethods: typeof payment_methods,
  ) {}

  async createPaymentMethod(
    user_id,
    type,
    card_number,
    exp_month,
    exp_year,
    cvc,
  ) {
    const paymentMethod = await this.stripe.paymentMethods.create({
      type: type,
      card: {
        number: card_number,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: cvc,
      },
    });
    if (paymentMethod) {
      const pm_id = paymentMethod.id;
      const createPaymentMethodDb = this.PaymentMethods.create({
        user_id,
        pm_id,
        exp_month,
        exp_year,
      });
      return createPaymentMethodDb;
    } else {
      throw new HttpException('Invalid payment method', HttpStatus.BAD_REQUEST);
    }
  }

  async getList(user_id) {
    return this.PaymentMethods.findAll({ where: { user_id } });
  }
  async getById(user_id, id) {
    const data = await this.PaymentMethods.findOne({where: {user_id, id}});
    if (!data) throw new HttpException('Payment method not found', HttpStatus.NOT_FOUND)
    return data;
  }

  async destroy(user_id, id) {
    const data = await this.getById(user_id, id);
    if (!data) throw new HttpException('Payment method not found', HttpStatus.NOT_FOUND)
    await this.PaymentMethods.destroy({where: {user_id, id}});
    return data;
  }
}
