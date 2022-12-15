import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {xAuthorization} from "../swagger/main";
import {RequestType, uuId} from "../dto/main.dto";
import {BiosService} from "./bios.service";
import {bio} from "../dto/bios.dto";
import {createBioBody, createBioResponse, getBioResponse} from "../swagger/bios";
import {skill} from "../dto/skills.dto";

@ApiTags('bios')
@Controller('bios')
export class BiosController {
  constructor(private readonly biosService: BiosService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiBody(createBioBody)
  async create(@Req() req: RequestType, @Body() body: bio){
    const {id} = req.user;
    const data = await this.biosService.create(id, body);
    return {
      status: 'success',
      message: 'Bio has been created successfully',
      data
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getBioResponse)
  async getList(@Req() req: RequestType){
    const {id} = req.user;
    const data = await this.biosService.getList(id);
    return {
      status: 'success',
      message: 'Bios list',
      data
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.biosService.getById(user_id, id);
    return {
      status: 'success',
      message: 'Get bio',
      data
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiBody(createBioBody)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async update(@Req() req: RequestType, @Param() param: uuId, @Body() body: bio){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.biosService.update(user_id, id, body);
    return {
      status: 'success',
      message: 'Bio has been updated successfully',
      data
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.biosService.destroy(user_id, id);
    return {
      status: 'success',
      message: 'Bio has been removed successfully',
      data
    }
  }
}
