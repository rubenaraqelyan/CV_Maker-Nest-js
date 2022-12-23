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
import { SkillsService } from './skills.service';
import { RequestType, uuId } from '../dto/main.dto';
import { xAuthorization } from '../swagger/main';
import {
  createSkillBody,
  createSkillResponse,
  getSkillResponse,
} from '../swagger/skills';
import { skill } from '../dto/skills.dto';
import { createAddressResponse } from '../swagger/addresses';
import { createLanguageResponse } from '../swagger/languages';
import { catchError } from '../utils/helpers';

@ApiTags('Skills')
@Controller('skill')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiBody(createSkillBody)
  async create(@Req() req: RequestType, @Body() body: skill) {
    try {
      const { id } = req.user;
      const data = await this.skillsService.create(id, body);
      return {
        status: 201,
        message: 'Skill has been created successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getSkillResponse)
  async getList(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.skillsService.getList(id);
      return {
        status: 200,
        message: 'Skills list',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.skillsService.getById(user_id, id);
      return {
        status: 200,
        message: 'Get skill',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiBody(createSkillBody)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async update(
    @Req() req: RequestType,
    @Param() param: uuId,
    @Body() body: skill,
  ) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.skillsService.update(user_id, id, body);
      return {
        status: 200,
        message: 'Skill has been updated successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createSkillResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.skillsService.destroy(user_id, id);
      return {
        status: 200,
        message: 'Skill has been removed successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }
}
