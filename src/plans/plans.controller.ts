import {Body, Controller, Delete, Get, Param, Post, Put, RawBodyRequest, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PlansService} from "./plans.service";
import {emptyResponse, xAuthorization} from "../swagger/main";
import {RequestType, uuId} from "../dto/main.dto";
import {plan, planSubscribeToggle} from "../dto/plans.dto";
import {
  createPlanBody,
  createPlanResponse,
  getPlanResponse,
  subscribeBody,
  subscribeResponse,
  subscribeToggleBody
} from "../swagger/plans";
import {PaymentMethodService} from "../payment_method/payment_methods.service";
import {catchError} from "../utils/helpers";

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
    try {
      const data = await this.planService.create(body);
      return {
        status: 201,
        message: 'Plan has been created successfully',
        data
      }
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getPlanResponse)
  async getList(@Req() req: RequestType){
    try {
      const data = await this.planService.getList();
      return {
        status: 200,
        message: 'Plans list',
        data
      }
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/connected')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  async connectedPlans(@Req() req: RequestType){
    try {
      const {id} = req.user;
      const data = await this.planService.connectedPlans(id);
      return {
        status: 200,
        message: 'Connected plans list',
        data
      }
    } catch (e) {
      return catchError(e);
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
    try {
      const {id} = param;
      const data = await this.planService.getById(id);
      return {
        status: 200,
        message: 'Get Plan',
        data
      }
    } catch (e) {
      return catchError(e);
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
    try {
      const {id} = param;
      const data = await this.planService.update(id, body);
      return {
        status: 200,
        message: 'Plan has been updated successfully',
        data
      }
    } catch (e) {
      return catchError(e);
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
    try {
      const {id} = param;
      const data = await this.planService.destroy(id);
      return {
        status: 200,
        message: 'Plan has been removed successfully',
        data
      }
    } catch (e) {
      return catchError(e);
    }
  }

  @Post('/subscribe/:id')//plan_id
  @ApiHeader(xAuthorization)
  @ApiBody(subscribeBody)
  @ApiResponse(subscribeResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async subscribe(@Req() req: RequestType, @Body() body: uuId, @Param() param: uuId){
    try {
      const {id: user_id, name, email} = req.user;
      const {id: plan_id} = param;
      const {id: payment_method_id} = body;
      const {customer_id: customer} = await this.paymentMethodService.getCustomer({name, email});
      const {pm_id} = await this.paymentMethodService.getById(user_id, payment_method_id);
      const data = await this.planService.subscribe({user_id, customer, plan_id, pm_id});
      return {
        status: 200,
        message: 'Plan has been subscribe successfully',
        data
      }
    } catch (e) {
      return catchError(e);
    }
  }

  @Post('/subscribe-toggle/:id')//plan_id
  @ApiHeader(xAuthorization)
  @ApiBody(subscribeToggleBody)
  @ApiResponse(emptyResponse('Subscription toggle'))
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async subscribeToggle(@Req() req: RequestType, @Body() body: planSubscribeToggle, @Param() param: uuId){
    try {
      const {id: user_id} = req.user;
      const {id: plan_id} = param;
      const {cancel_at} = body;
      await this.planService.subscribeToggle({user_id, plan_id, cancel_at});
      return {
        status: 200,
        message: `Plan has been ${cancel_at ? 'subscribe' : 'unsubscribe'} successfully`,
      }
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/subscribe-delete/:id')//plan_id
  @ApiHeader(xAuthorization)
  @ApiResponse(createPlanResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async subscribeDelete(@Req() req: RequestType, @Param() param: uuId){
    try {
      const {id: user_id} = req.user;
      const {id: plan_id} = param;
      const data = await this.planService.subscribeDelete({user_id, plan_id});
      return {
        status: 200,
        message: 'Plan has been disconnect successfully',
        data
      }
    } catch (e) {
      return catchError(e);
    }
  }

  @Post('/webhook')
  async webhook(@Req() req: RawBodyRequest<Request>) {
    await this.planService.webhook(req)
  }

}
