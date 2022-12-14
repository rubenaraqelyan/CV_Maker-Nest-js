import {Body, Controller, Delete, Get, Param, Post, Req} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LanguagesService} from "./languages.service";
import {xAuthorization} from "../swagger/main";import {RequestType, uuId} from "../dto/main.dto";
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
      message: 'Language success created',
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
      message: 'Language success deleted',
      data
    }
  }
}
