import { Module } from '@nestjs/common';
import { PaymentMethodController } from './payment_methods.controller';
import { PaymentMethodService } from './payment_methods.service';

@Module({
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
