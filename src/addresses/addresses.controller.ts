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
import { AddressesService } from './addresses.service';
import { RequestType, uuId } from '../dto/main.dto';
import {
  createAddressBody,
  createAddressResponse,
  getAddressesResponse,
} from '../swagger/addresses';
import { address } from '../dto/address.dto';
import { xAuthorization } from '../swagger/main';
import {catchError, response} from '../utils/helpers';
import messages from "../utils/messages";

@ApiTags('Addresses')
@Controller('address')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiBody(createAddressBody)
  @ApiResponse(createAddressResponse)
  async create(@Req() req: RequestType, @Body() body: address) {
    try {
      const { id } = req.user;
      const data = await this.addressesService.create(id, body);
      return response({
        message: messages.ADDRESS_CREATED,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getAddressesResponse)
  async getList(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.addressesService.getList(id);
      return response({
        message: messages.ADDRESS_GET_LIST,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createAddressResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.addressesService.getById(user_id, id);
      return response({
        message: messages.ADDRESS_GET,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/:id')
  @ApiBody(createAddressBody)
  @ApiHeader(xAuthorization)
  @ApiResponse(createAddressResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async update(
    @Req() req: RequestType,
    @Body() body: address,
    @Param() param: uuId,
  ) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.addressesService.update(user_id, id, body);
      return response({
        message: messages.ADDRESS_UPDATED,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createAddressResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.addressesService.destroy(user_id, id);
      return response({
        message: messages.ADDRESS_REMOVED,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }
}
