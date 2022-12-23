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
import { xAuthorization } from '../swagger/main';
import { RequestType, uuId } from '../dto/main.dto';
import { BiosService } from './bios.service';
import { bio } from '../dto/bios.dto';
import {
  createBioBody,
  createBioResponse,
  getBioResponse,
} from '../swagger/bios';
import { skill } from '../dto/skills.dto';
import { catchError } from '../utils/helpers';

@ApiTags('Bios')
@Controller('bios')
export class BiosController {
  constructor(private readonly biosService: BiosService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiBody(createBioBody)
  async create(@Req() req: RequestType, @Body() body: bio) {
    try {
      const { id } = req.user;
      const data = await this.biosService.create(id, body);
      return {
        statusCode: 201,
        message: 'Bio has been created successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getBioResponse)
  async getList(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.biosService.getList(id);
      return {
        statusCode: 200,
        message: 'Bios list',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.biosService.getById(user_id, id);
      return {
        statusCode: 200,
        message: 'Get bio',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiBody(createBioBody)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async update(
    @Req() req: RequestType,
    @Param() param: uuId,
    @Body() body: bio,
  ) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.biosService.update(user_id, id, body);
      return {
        statusCode: 200,
        message: 'Bio has been updated successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createBioResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.biosService.destroy(user_id, id);
      return {
        statusCode: 200,
        message: 'Bio has been removed successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }
}
