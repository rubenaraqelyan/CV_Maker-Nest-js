import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
import { phone_number } from 'src/dto/phone_number.dto';
import { PhoneNumbersService } from './phone_numbers.service';
import { xAuthorization } from '../swagger/main';
import {
  createPhoneNumberBody,
  createPhoneNumberResponse,
  getPhoneNumbersResponse,
} from 'src/swagger/phone_numbers';
import {catchError, response} from '../utils/helpers';
import messages from "../messages";
@ApiTags('Phone numbers')
@Controller('phone-number')
export class PhoneNumbersController {
  constructor(private readonly phoneNumbersService: PhoneNumbersService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPhoneNumberResponse)
  @ApiBody(createPhoneNumberBody)
  async createPhoneNumber(@Req() req: RequestType, @Body() body: phone_number) {
    try {
      const { id } = req.user;
      const data = await this.phoneNumbersService.create(id, body);
      return response({
        message: messages.phoneNumberCreated,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getPhoneNumbersResponse)
  async getList(@Req() req: RequestType) {
    const { id } = req.user;
    const data = await this.phoneNumbersService.getList(id);
    return response({
      message: messages.phoneNumberList,
      data,
    });
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPhoneNumberResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.phoneNumbersService.getById(user_id, id);
      return response({
        message: messages.phoneNumberGet,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPhoneNumberResponse)
  @ApiBody(createPhoneNumberBody)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async update(
    @Req() req: RequestType,
    @Param() param: uuId,
    @Body() body: phone_number,
  ) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.phoneNumbersService.update(user_id, id, body);
      return response({
        message: messages.phoneNumberUpdate,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPhoneNumberResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.phoneNumbersService.destroy(user_id, id);
      return response({
        message: messages.phoneNumberRemoved,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }
}
