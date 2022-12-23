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
import { LanguagesService } from './languages.service';
import { xAuthorization } from '../swagger/main';
import { RequestType, uuId } from '../dto/main.dto';
import {
  createLanguageBody,
  createLanguageResponse,
  getLanguageResponse,
} from '../swagger/languages';
import { language } from '../dto/languages.dto';
import { catchError } from '../utils/helpers';

@ApiTags('Languages')
@Controller('language')
export class LanguagesController {
  constructor(private readonly languageService: LanguagesService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiBody(createLanguageBody)
  async create(@Req() req: RequestType, @Body() body: language) {
    try {
      const { id } = req.user;
      const data = await this.languageService.create(id, body);
      return {
        status: 201,
        message: 'Language has been created successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getLanguageResponse)
  async getList(@Req() req: RequestType) {
    try {
      const { id } = req.user;
      const data = await this.languageService.getList(id);
      return {
        status: 200,
        message: 'Language list',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async getById(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.languageService.getById(user_id, id);
      return {
        status: 200,
        message: 'Get language',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiResponse(createLanguageBody)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async update(
    @Req() req: RequestType,
    @Param() param: uuId,
    @Body() body: language,
  ) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.languageService.update(user_id, id, body);
      return {
        status: 200,
        message: 'Language has been updated successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId) {
    try {
      const { id: user_id } = req.user;
      const { id } = param;
      const data = await this.languageService.destroy(user_id, id);
      return {
        status: 200,
        message: 'Language has been removed successfully',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }
}
