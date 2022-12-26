import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiHeader, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { xAuthorization } from 'src/swagger/main';
import { UserCvsService } from './user_cvs.service';
import { RequestType, uuId } from '../dto/main.dto';
import { catchError } from '../utils/helpers';
import { createCvResponse, getCvResponse } from '../swagger/user_cvs';

@ApiTags('CVs')
@Controller('user-cvs')
export class UserCvsController {
  constructor(private readonly userCvsService: UserCvsService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCvResponse)
  async create(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.userCvsService.create(id);
      return {
        statusCode: 201,
        message: 'CV has been created successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getCvResponse)
  async getList(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.userCvsService.getList(id);
      return {
        statusCode: 200,
        message: 'CVs list',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/in-month')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCvResponse)
  async getInMonth(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.userCvsService.getInMonth(id);
      return {
        statusCode: 200,
        message: 'Get in mouth',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCvResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.userCvsService.getById(user_id, id);
      return {
        statusCode: 200,
        message: 'Get CV',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createCvResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.userCvsService.destroy(user_id, id);
      return {
        statusCode: 200,
        message: 'CV has been removed successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

}
