import { Module } from '@nestjs/common';
import { PaymentMethodController } from './payment_methods.controller';
import { PaymentMethodService } from './payment_methods.service';
import { StripeModule } from '../services/Stripe.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { payment_methods } from './payment_methods.model';
@Module({
  imports: [
    StripeModule.forRoot(),
    SequelizeModule.forFeature([payment_methods]),
  ],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
