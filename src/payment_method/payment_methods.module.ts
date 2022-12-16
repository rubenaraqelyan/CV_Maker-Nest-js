import { Module } from '@nestjs/common';
import { PaymentMethodController } from './payment_methods.controller';
import { PaymentMethodService } from './payment_methods.service';
import {StripeModule} from "../services/Stripe.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {paymentMethods} from "./payment_methods.model";

@Module({
  imports: [
    StripeModule.forRoot(),
    SequelizeModule.forFeature([paymentMethods])
  ],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
