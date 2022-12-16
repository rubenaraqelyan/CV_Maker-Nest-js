import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {AddressesService} from "./addresses.service";
import {RequestType, uuId} from "../dto/main.dto";
import {createAddressBody, createAddressResponse, getAddressesResponse} from "../swagger/addresses";
import {address} from "../dto/address.dto";
import {xAuthorization} from "../swagger/main";

@ApiTags('Addresses')
@Controller('address')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getAddressesResponse)
  async getList(@Req() req: RequestType){
    const {id} = req.user;
    const data = await this.addressesService.getList(id);
    return {
      statusCode: 201,
      message: 'Get addresses',
      data
    }
  }

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiBody(createAddressBody)
  @ApiResponse(createAddressResponse)
  async create(@Req() req: RequestType, @Body() body: address){
    const {id} = req.user;
    const data = await this.addressesService.create(id, body);
    return {
      statusCode: 200,
      message: 'Address has been created successfully',
      data
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createAddressResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.addressesService.getById(user_id, id);
    return {
      statusCode: 200,
      message: 'Get address',
      data
    }
  }

  @Put('/:id')
  @ApiBody(createAddressBody)
  @ApiHeader(xAuthorization)
  @ApiResponse(createAddressResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async update(@Req() req: RequestType, @Body() body: address, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.addressesService.update(user_id, id, body);
    return {
      statusCode: 200,
      message: 'Address has been updated successfully',
      data
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createAddressResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.addressesService.destroy(user_id, id);
    return {
      statusCode: 200,
      message: 'Address has been removed successfully',
      data
    }
  }

}
