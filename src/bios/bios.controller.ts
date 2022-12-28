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
import {catchError, response} from '../utils/helpers';
import messages from "../utils/messages";

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
      return response({
        message: messages.BIO_CREATED,
        data,
      });
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
      return response({
        message: messages.BIO_LIST,
        data,
      });
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
      return response({
        message: messages.BIO_GET,
        data,
      });
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
      return response({
        message: messages.BIO_UPDATED,
        data,
      });
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
      return response({
        message: messages.BIO_REMOVED,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }
}
