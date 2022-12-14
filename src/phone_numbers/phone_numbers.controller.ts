import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestType } from 'src/dto/main.dto';
import { phone_number } from 'src/dto/phone_number.dto';
import { PhoneNumbersService } from './phone_numbers.service';
import { xAuthorization } from '../swagger/main';
import {
  createPhoneNumberBody,
  createPhoneNumberResponse,
} from 'src/swagger/phone_numbers';

@ApiTags('phone number')
@Controller('phone-number')
export class PhoneNumbersController {
  constructor(private readonly phoneNumbersService: PhoneNumbersService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createPhoneNumberResponse)
  @ApiBody(createPhoneNumberBody)
  async createPhoneNumber(@Req() req: RequestType, @Body() body: phone_number) {
    const { id } = req.user;
    const data = await this.phoneNumbersService.create(id, body);
    return {
      status: 'success',
      message: 'Phone number has been created successfully',
      data,
    };
  }
}
