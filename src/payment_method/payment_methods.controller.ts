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
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

@ApiTags('Payment methods')
@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodsService: PaymentMethodService) {}
  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiBody(createPaymentMethodBody)
  @ApiResponse(createPaymentMethodResponse)
  async create(@Req() req: RequestType, @Body() body: payment_method) {
    const { type, card_number, exp_month, exp_year, cvc } = body;
    const { id } = req.user;
    const data = await this.paymentMethodsService.createPaymentMethod(
      id,
      type,
      card_number,
      exp_month,
      exp_year,
      cvc,
    );
    return {
      status: 'success',
      message: 'Payment method has been created successfully',
      data,
    };
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getPaymentMethodResponse)
  async getList(@Req() req: RequestType) {
    const { id } = req.user;
    const data = await this.paymentMethodsService.getList(id);
    return {
      statusCode: 200,
      message: 'Payment method list',
      data,
    };
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPaymentMethodResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.paymentMethodsService.getById(user_id, id);
    return {
      statusCode: 200,
      message: 'Get Payment method',
      data
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
    const { id: user_id } = req.user;
    const { id } = param;
    const data = await this.paymentMethodsService.destroy(user_id, id);
    return {
      statusCode: 200,
      message: 'Payment method has been removed successfully',
      data,
    };
  }
}
