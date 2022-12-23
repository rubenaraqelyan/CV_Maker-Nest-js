import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RequestType, uuId } from 'src/dto/main.dto';
import { payment_method } from 'src/dto/payment_method.dto';
import { xAuthorization } from 'src/swagger/main';
import {
  createPaymentMethodBody,
  createPaymentMethodResponse,
  getPaymentMethodResponse,
} from 'src/swagger/payment_methods';
import { PaymentMethodService } from './payment_methods.service';
import {catchError} from "../utils/helpers";

@ApiTags('Payment methods')
@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodsService: PaymentMethodService) {}
  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiBody(createPaymentMethodBody)
  @ApiResponse(createPaymentMethodResponse)
  async create(@Req() req: RequestType, @Body() body: payment_method) {
    try {
      const { type, card_number: number, exp_month, exp_year, cvc } = body;
      const {id: user_id, name, email} = req.user;
      const {customer_id: customer} = await this.paymentMethodsService.getCustomer({name, email});
      const data = await this.paymentMethodsService.createPaymentMethod({
        user_id,
        customer,
        type,
        number,
        exp_month,
        exp_year,
        cvc,
      });
      return {
        status: 200,
        message: 'Payment method has been created successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getPaymentMethodResponse)
  async getList(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.paymentMethodsService.getList(id);
      return {
        status: 200,
        message: 'Payment method list',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPaymentMethodResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.paymentMethodsService.getById(user_id, id);
      return {
        status: 200,
        message: 'Get Payment method',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPaymentMethodResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.paymentMethodsService.destroy(user_id, id);
      return {
        status: 200,
        message: 'Payment method has been removed successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }
}
