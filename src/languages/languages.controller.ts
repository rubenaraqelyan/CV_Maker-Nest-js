import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LanguagesService} from "./languages.service";
import {xAuthorization} from "../swagger/main";
import {RequestType, uuId} from "../dto/main.dto";
import {createLanguageBody, createLanguageResponse, getLanguageResponse} from "../swagger/languages";
import {language} from "../dto/languages.dto";

@ApiTags('language')
@Controller('language')
export class LanguagesController {
  constructor(private readonly languageService: LanguagesService) {}

  @Post('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiBody(createLanguageBody)
  async create(@Req() req: RequestType, @Body() body: language){
    const {id} = req.user;
    const data = await this.languageService.create(id, body);
    return {
      status: 'success',
      message: 'Language has been created successfully',
      data
    }
  }

  @Get('/')
  @ApiHeader(xAuthorization)
  @ApiResponse(getLanguageResponse)
  async getList(@Req() req: RequestType){
    const {id} = req.user;
    const data = await this.languageService.getList(id);
    return {
      status: 'success',
      message: 'Language list',
      data
    }
  }

  @Get('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async getById(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.languageService.getById(user_id, id);
    return {
      status: 'success',
      message: 'Get language',
      data
    }
  }

  @Put('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiResponse(createLanguageBody)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async update(@Req() req: RequestType, @Param() param: uuId, @Body() body: language){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.languageService.update(user_id, id, body);
    return {
      status: 'success',
      message: 'Language has been updated successfully',
      data
    }
  }

  @Delete('/:id')
  @ApiHeader(xAuthorization)
  @ApiResponse(createLanguageResponse)
  @ApiParam({
    name: 'id',
    type: 'string'
  })
  async destroy(@Req() req: RequestType, @Param() param: uuId){
    const {id: user_id} = req.user;
    const {id} = param;
    const data = await this.languageService.destroy(user_id, id);
    return {
      status: 'success',
      message: 'Language has been removed successfully',
      data
    }
  }
}
