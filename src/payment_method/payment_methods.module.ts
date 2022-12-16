import { Module } from '@nestjs/common';
import { PaymentMethodController } from './payment_methods.controller';
import { PaymentMethodService } from './payment_methods.service';
import {StripeModule} from "../services/Stripe.modul";
import {SequelizeModule} from "@nestjs/sequelize";
import {paymentMethods} from "./payment_methods.model";
const {STRIPE_SECRET_KEY} = process.env;

@Module({
  imports: [
    SequelizeModule.forFeature([paymentMethods]),
    StripeModule.forRoot(STRIPE_SECRET_KEY, {apiVersion: '2022-11-15'})
  ],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
