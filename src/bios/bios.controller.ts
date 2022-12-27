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
import messages from "../messages";

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
        message: messages.bioCreated,
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
        message: messages.bioList,
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
        message: messages.bioGet,
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
        message: messages.bioUpdated,
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
        message: messages.bioRemoved,
        data,
      });
    } catch (e) {
      return catchError(e);
    }
  }
}
