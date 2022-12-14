import {Body, Controller, Delete, Get, Param, Post, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {xAuthorization} from "../swagger/main";
import {RequestType, uuId} from "../dto/main.dto";
import {BiosService} from "./bios.service";
import {bio} from "../dto/bios.dto";
import {createBioBody, createBioResponse, getBioResponse} from "../swagger/bios";

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
      message: 'Bio success created',
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
      message: 'Bio success deleted',
      data
    }
  }
}
