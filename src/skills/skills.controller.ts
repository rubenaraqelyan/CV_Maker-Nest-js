import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SkillsService} from "./skills.service";
import {RequestType, uuId} from "../dto/main.dto";
import {xAuthorization} from "../swagger/main";
import {createSkillBody, createSkillResponse, getSkillResponse} from "../swagger/skills";
import {skill} from "../dto/skills.dto";
import {createAddressResponse} from "../swagger/addresses";
import {createLanguageResponse} from "../swagger/languages";

@ApiTags('Skills')
@Controller('skill')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiBody(createSkillBody)
  async create(@Req() req: RequestType, @Body() body: skill){
    const {id} = req.user;
    const data = await this.skillsService.create(id, body);
    return {
      statusCode: 201,
      message: 'Skill has been created successfully',
      data
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getSkillResponse)
  async getList(@Req() req: RequestType){
    const {id} = req.user;
    const data = await this.skillsService.getList(id);
    return {
      statusCode: 200,
      message: 'Skills list',
      data
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.skillsService.getById(user_id, id);
    return {
      statusCode: 200,
      message: 'Get skill',
      data
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiBody(createSkillBody)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async update(@Req() req: RequestType, @Param() param: uuId, @Body() body: skill){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.skillsService.update(user_id, id, body);
    return {
      statusCode: 200,
      message: 'Skill has been updated successfully',
      data
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.skillsService.destroy(user_id, id);
    return {
      statusCode: 200,
      message: 'Skill has been removed successfully',
      data
    }
  }

}
