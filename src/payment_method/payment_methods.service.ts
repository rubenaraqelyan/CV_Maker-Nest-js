import {Inject, Injectable} from '@nestjs/common';
import {STRIPE_CLIENT} from "../utils/constanst";
import Stripe from "stripe";
import {InjectSqlModel} from "../database/inject-model-sql";
import {paymentMethods} from "./payment_methods.model";

@Injectable()
export class PaymentMethodService {
  constructor(
    @Inject(STRIPE_CLIENT) private stripe: Stripe,
    @InjectSqlModel(paymentMethods) private PaymentMethods: typeof paymentMethods
  ) {}


}
