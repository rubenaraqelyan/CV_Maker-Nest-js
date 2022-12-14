import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SkillsService} from "./skills.service";
import {RequestType, uuId} from "../dto/main.dto";
import {xAuthorization} from "../swagger/main";
import {createSkillBody, createSkillResponse, getSkillResponse} from "../swagger/skills";
import {skill} from "../dto/skills.dto";
import {createAddressResponse} from "../swagger/addresses";

@ApiTags('skill')
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
      status: 'success',
      message: 'Skill success created',
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
      status: 'success',
      message: 'Skills list',
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
      status: 'success',
      message: 'Skill success deleted',
      data
    }
  }

}
