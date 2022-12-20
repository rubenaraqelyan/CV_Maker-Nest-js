import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {subscriptions} from "./subscriptions.model";
import {StripeModule} from "../services/Stripe.module";

@Module({
  imports: [
    StripeModule.forRoot(),
    SequelizeModule.forFeature([subscriptions])
  ],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService]
})
export class SubscriptionsModule {}
