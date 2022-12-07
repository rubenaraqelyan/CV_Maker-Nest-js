import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Next,
  Param,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

import { next } from '../dto/controller.dto';
import { UsersService } from './users.service';
import { Type } from 'class-transformer';
import { UsersDto } from '../dto/users.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  // @ApiBody({
  //     schema: {
  //         properties: {
  //             aaa: {
  //                 type: 'string'
  //             },
  //             rrr: {
  //                 type: 'number'
  //             }
  //         }
  //     }
  // })
  @ApiBody({ type: UsersDto })
  @ApiResponse({
    status: 200,
    type: UsersDto,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() UsersDto: UsersDto): Promise<object> {
    const user = await this.usersService.create(UsersDto);
    return {
      status: 'success',
      message: 'User created',
      user,
    };
  }

  @Get('/:id')
  findAll(@Param('id') id: string, @Next() next): string {
    console.log(id);
    return 'This action returns all cats';
  }
}
