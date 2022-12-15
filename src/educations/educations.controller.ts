import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {EducationsService} from "./educations.service";
import {xAuthorization} from "../swagger/main";
import {RequestType, uuId} from "../dto/main.dto";
import {createEducationBody, createEducationResponse, getEducationResponse} from "../swagger/educations";
import {educations} from "../dto/educations.dto";

@ApiTags('Educations')
@Controller('education')
export class EducationsController {
  constructor(private readonly educationsService: EducationsService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createEducationResponse)
  @ApiBody(createEducationBody)
  async create(@Req() req: RequestType, @Body() body: educations){
    const {id} = req.user;
    const data = await this.educationsService.create(id, body);
    return {
      status: 'success',
      message: 'Education has been created successfully',
      data
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getEducationResponse)
  async getList(@Req() req: RequestType){
    const {id} = req.user;
    const data = await this.educationsService.getList(id);
    return {
      status: 'success',
      message: 'Educations list',
      data
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createEducationResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.educationsService.getById(user_id, id);
    return {
      status: 'success',
      message: 'Get Education',
      data
    }
  }
  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createEducationResponse)
  @ApiBody(createEducationBody)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async update(@Req() req: RequestType, @Param() param: uuId, @Body() body: educations){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.educationsService.update(user_id, id, body);
    return {
      status: 'success',
      message: 'Education has been updated successfully',
      data
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createEducationResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.educationsService.destroy(user_id, id);
    return {
      status: 'success',
      message: 'Education has been removed successfully',
      data
    }
  }
}
