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
import {ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Type } from 'class-transformer';
import {UserDto, UserLoginDto, UsersCreateResDto} from '../dto/user.dto';
import {response} from "../utils/helpers";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/sign-up')
  @ApiBody({
    type: UserDto,
    description: 'User registration',
  })
  @ApiResponse({
    status: 200,
    type: UsersCreateResDto,
    description: 'Users successfully registered',
  })
  async signUp(@Body() body: UserDto) {
    const data = await this.usersService.signUp(body);
    return response({
      status: 'success',
      message: 'Users successfully registered',
      data
    });
  }

  @Post('/sign-in')
  @ApiBody({
    type: UserLoginDto,
    description: 'User login',
  })
  @ApiResponse({
    status: 200,
    type: UsersCreateResDto,
    description: 'Users successfully login',
  })
  async signIn(@Body() body: UserLoginDto) {
    const data = await this.usersService.signIn(body);
    return response({
      status: 'success',
      message: 'User successfully login',
      data
    });
  }

  @Get('/:id')
  findAll(@Param('id') id: string, @Next() next): string {
    console.log(id);
    return 'This action returns all cats';
  }
}
