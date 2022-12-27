import {Controller, Delete, Get, HttpStatus, Param, Post, Put, Req} from '@nestjs/common';
import { ApiHeader, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { xAuthorization } from 'src/swagger/main';
import { UserCvsService } from './user_cvs.service';
import { RequestType, uuId } from '../dto/main.dto';
import {catchError, response} from '../utils/helpers';
import { createCvResponse, getCvResponse } from '../swagger/user_cvs';
import messages from "../messages";

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
      return response({
        message: messages.cvCreated,
        data,
      });
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
      return response({
        message: messages.cvList,
        data,
      });
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
      return response({
        message: messages.cvGet,
        data,
      });
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
      return response({
        message: messages.cvRemoved,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }
}
