import {Body, Controller, Delete, Get, Param, Post, Put, RawBodyRequest, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PlansService} from "./plans.service";
import {xAuthorization} from "../swagger/main";
import {RequestType, uuId} from "../dto/main.dto";
import {plan} from "../dto/plans.dto";
import {createPlanBody, createPlanResponse, getPlanResponse} from "../swagger/plans";
import {PaymentMethodService} from "../payment_method/payment_methods.service";

@ApiTags('Plans')
@Controller('plan')
export class PlansController {
  constructor(
    private readonly planService: PlansService,
    private readonly paymentMethodService: PaymentMethodService,
  ) {}
  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  @ApiBody(createPlanBody)
  async create(@Req() req: RequestType, @Body() body: plan){
    const data = await this.planService.create(body);
    return {
      statusCode: 201,
      message: 'Plan has been created successfully',
      data
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getPlanResponse)
  async getList(@Req() req: RequestType){
    const data = await this.planService.getList();
    return {
      statusCode: 200,
      message: 'Plans list',
      data
    }
  }

  @Get('/connected')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  async connectedPlans(@Req() req: RequestType){
    const {id} = req.user;
    const data = await this.planService.connectedPlans(id);
    return {
      statusCode: 200,
      message: 'Connected plans list',
      data
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id} = param;
    const data = await this.planService.getById(id);
    return {
      statusCode: 200,
      message: 'Get Plan',
      data
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  @ApiBody(createPlanBody)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async update(@Req() req: RequestType, @Param() param: uuId, @Body() body: plan){
    const {id} = param;
    const data = await this.planService.update(id, body);
    return {
      statusCode: 200,
      message: 'Plan has been updated successfully',
      data
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId){
    const {id} = param;
    const data = await this.planService.destroy(id);
    return {
      statusCode: 200,
      message: 'Plan has been removed successfully',
      data
    }
  }

  @Post('/connect/:id')//plan_id
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async subscribePlan(@Req() req: RequestType, @Body() body: uuId, @Param() param: uuId){
    const {id: user_id, name, email} = req.user;
    const {id: plan_id} = param;
    const {id: payment_method_id} = body;
    const {customer_id: customer} = await this.paymentMethodService.getCustomer({name, email});
    const {pm_id} = await this.paymentMethodService.getById(user_id, payment_method_id);
    const data = await this.planService.subscribePlan({user_id, customer, plan_id, pm_id});
    return {
      statusCode: 200,
      message: 'Plan has been subscribe successfully',
      data
    }
  }

  @Post('/disconnect/:id')//plan_id
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async disconnectPlan(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.planService.disconnectPlan(user_id, id);
    return {
      statusCode: 200,
      message: 'Plan has been disconnect successfully',
      data
    }
  }

  @Post('/webhook')
  async webhook(@Req() req: RawBodyRequest<Request>) {
    await this.planService.webhook(req)
  }

}
