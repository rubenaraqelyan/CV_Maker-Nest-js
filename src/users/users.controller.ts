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
import {ApiBody, ApiHeader, ApiOperation, ApiProperty, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersService} from './users.service';
import {Type} from 'class-transformer';
import {UserDto, UserLoginDto} from '../dto/user.dto';
import {getMeResponse, signInBody, signInResponse, signUpBody, signUpResponse} from "../swagger/users";
import {RequestType} from "../dto/main.dto";
import {xAuthorization} from "../swagger/main";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }
  @Post('/sign-up')
  @ApiBody(signUpBody)
  @ApiResponse(signUpResponse)
  async signUp(@Body() body: UserDto) {
    const data = await this.usersService.signUp(body);
    return {
      status: 'success',
      message: 'User success registered',
      data
    }
  }

  @Post('/sign-in')
  @ApiBody(signInBody)
  @ApiResponse(signInResponse)
  async signIn(@Body() body: UserLoginDto) {
    const data = await this.usersService.signIn(body);
    const token = this.usersService.getToken(data.id);
    return {
      status: 'success',
      message: 'User successfully login',
      data,
      token,
    };
  }

  @Get('/me')
  @ApiHeader(xAuthorization)
  @ApiResponse(getMeResponse)
  async getMe(@Req() req: RequestType) {
    const {id} = req.user;
    const data = await this.usersService.getUserById(id);
    return {
      status: 'success',
      message: 'User successfully login',
      data,
    };
  }

  // @Get('/:id')
  // findAll(@Param('id') id: string, @Next() next): string {
  //   console.log(id);
  //   return 'This action returns all cats';
  // }
}
