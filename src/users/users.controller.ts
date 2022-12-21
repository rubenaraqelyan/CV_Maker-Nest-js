import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile, UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {ApiBody, ApiConsumes, ApiHeader, ApiParam, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersService} from './users.service';

import {
  acceptCodeForgotPassword,
  forgotPassword,
  UpdateDto,
  updatePassword,
  UserDto,
  UserLoginDto
} from '../dto/user.dto';
import {
  acceptCodeForgotPasswordBody,
  forgotPasswordBody,
  getMeResponse,
  signInBody,
  signInResponse,
  signUpBody,
  updateBody, updatePasswordBody,
  updateResponse, uploadAvatarBody, uploadAvatarResponse, verifyUserResponse
} from "../swagger/users";
import {RequestType} from "../dto/main.dto";
import {emptyResponse, xAuthorization} from "../swagger/main";
import {FileInterceptor} from "@nestjs/platform-express";
import {GoogleAuthGuard} from "../services/GoogleGuard";

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/sign-up')
  @ApiBody(signUpBody)
  @ApiResponse(emptyResponse('User response'))
  async signUp(@Body() body: UserDto) {
    const data = await this.usersService.signUp(body);
    return {
      statusCode: 201,
      message: 'Verification has been sent to email',
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
      statusCode: 200,
      message: 'User has successfully login',
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
      statusCode: 200,
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
      statusCode: 200,
      message: 'User info has been updated successfully ',
      data,
    };
  }

  @Put('/password')
  @ApiBody(updatePasswordBody)
  @ApiResponse(emptyResponse('User response'))
  @ApiHeader(xAuthorization)
  async updatePassword(@Req() req: RequestType, @Body() body: updatePassword) {
    const {id} = req.user;
    await this.usersService.updatePassword(id, body);
    return {
      statusCode: 200,
      message: 'Password has been updated successfully',
    };
  }

  @Get('/email-verify/:token')
  @ApiParam({
    name: 'token',
    type: 'string'
  })
  @ApiResponse(verifyUserResponse)
  async verifyUser(@Param('token') token: string) {
    const id = await this.usersService.verifyToken(token, 'verify_email');
    const data = await this.usersService.verifyEmail(id);
    return {
      statusCode: 200,
      message: 'User has been verified successfully',
      data
    };
  }

  @Post('/forgot-password')
  @ApiBody(forgotPasswordBody)
  @ApiResponse(emptyResponse('User response'))
  async forgotPassword(@Body() body: forgotPassword) {
    await this.usersService.sendForgotCodeToEmail(body.email);
    return {
      statusCode: 200,
      message: 'Verification code has sent to your email',
    };
  }

  @Put('/accept-forgot-password')
  @ApiBody(acceptCodeForgotPasswordBody)
  @ApiResponse(emptyResponse('User response'))
  async acceptCodeForgotPassword(@Req() req: RequestType, @Body() body: acceptCodeForgotPassword) {
    await this.usersService.acceptCodeForgotPassword(body);
    return {
      statusCode: 200,
      message: 'Password was changed',
    };
  }

  @ApiHeader(xAuthorization)
  @ApiConsumes("multipart/form-data")
  @ApiBody(uploadAvatarBody)
  @ApiResponse(uploadAvatarResponse)
  @Post('/avatar')
  // @UseInterceptors(AnyFilesInterceptor())
  // uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  // }
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(@Req() req: RequestType, @UploadedFile() file: Express.Multer.File) {
    const {id} = req.user;
    const data = await this.usersService.uploadAvatar(id, file);
    return {
      statusCode: 200,
      message: 'Avatar has ben uploaded',
      data
    };
  }

}
