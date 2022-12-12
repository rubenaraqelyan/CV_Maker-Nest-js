import {
  Body,
  Controller,
  Get, Header,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import {ApiBody, ApiHeader, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersService} from './users.service';
import {Type} from 'class-transformer';
import {
  acceptCodeForgotPassword,
  forgotPassword,
  UpdateDto,
  updatePassword,
  UserDto,
  UserLoginDto
} from '../dto/user.dto';
import {
  acceptCodeForgotPasswordBody, acceptCodeForgotPasswordResponse,
  forgotPasswordBody, forgotPasswordResponse,
  getMeResponse,
  signInBody,
  signInResponse,
  signUpBody,
  signUpResponse,
  updateBody, updatePasswordBody, updatePasswordResponse,
  updateResponse, verifyUserResponse
} from "../swagger/users";
import {RequestType} from "../dto/main.dto";
import {xAuthorization} from "../swagger/main";
@ApiTags('user')
@Controller('user')
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
      message: 'Verification email sent',
      data
    }
  }
  @Post('/sign-in')
  @ApiBody(signInBody)
  @ApiResponse(signInResponse)
  async signIn(@Body() body: UserLoginDto) {
    const data = await this.usersService.signIn(body);
    const token = this.usersService.getToken(data.id);
    await this.usersService.sendForgotCodeToEmail('karen.evistep@gmail.com')
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
      message: 'Current user',
      data,
    };
  }
  @Put('/')
  @ApiBody(updateBody)
  @ApiResponse(updateResponse)
  @ApiHeader(xAuthorization)
  async update(@Req() req: RequestType, @Body() body: UpdateDto) {
    const {id} = req.user;
    const data = await this.usersService.update(id, body);
    return {
      status: 'success',
      message: 'User successfully updated',
      data,
    };
  }
  @Put('/password')
  @ApiBody(updatePasswordBody)
  @ApiResponse(updatePasswordResponse)
  @ApiHeader(xAuthorization)
  async updatePassword(@Req() req: RequestType, @Body() body: updatePassword) {
    const {id} = req.user;
    await this.usersService.updatePassword(id, body);
    return {
      status: 'success',
      message: 'Password successfully updated',
    };
  }
  @Put('/email-verify/:token')
  @ApiParam({
    name: 'token',
    type: 'string'
  })
  @ApiResponse(verifyUserResponse)
  async verifyUser(@Req() req: RequestType, @Param('token') token: string) {
    const id = await this.usersService.verifyToken(token, 'verify_email');
    const data = await this.usersService.verifyEmail(id);
    return {
      status: 'success',
      message: 'User successfully verified',
      data
    };
  }
  @Post('/forgot-password')
  @ApiBody(forgotPasswordBody)
  @ApiResponse(forgotPasswordResponse)
  async forgotPassword(@Req() req: RequestType, @Body() body: forgotPassword) {
    await this.usersService.sendForgotCodeToEmail(body.email);
    return {
      status: 'success',
      message: 'Verification code sent to your email',
    };
  }
  @Put('/accept-forgot-password')
  @ApiBody(acceptCodeForgotPasswordBody)
  @ApiResponse(acceptCodeForgotPasswordResponse)
  async acceptCodeForgotPassword(@Req() req: RequestType, @Body() body: acceptCodeForgotPassword) {
    await this.usersService.acceptCodeForgotPassword(body);
    return {
      status: 'success',
      message: 'Password changed',
    };
  }
}
