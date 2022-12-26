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
import {catchError} from "../utils/helpers";

@ApiTags('Users')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/sign-up')
  @ApiBody(signUpBody)
  @ApiResponse(emptyResponse('User response'))
  async signUp(@Body() body: UserDto) {
    try {
      const data = await this.usersService.signUp(body);
      return {
        status: 201,
        message: 'Verification has been sent to email',
        data
      }
    } catch (e) {
      return catchError(e);
    }
  }

  @Post('/sign-in')
  @ApiBody(signInBody)
  @ApiResponse(signInResponse)
  async signIn(@Body() body: UserLoginDto) {
    try {
      const data = await this.usersService.signIn(body);
      const token = this.usersService.getToken(data.id);
      return {
        status: 200,
        message: 'User has successfully login',
        data,
        token,
      };
    } catch (e){
      return catchError(e);
    }
  }

  @Get('/me')
  @ApiHeader(xAuthorization)
  @ApiResponse(getMeResponse)
  async getMe(@Req() req: RequestType) {
    try {
      const {id} = req.user;
      const data = await this.usersService.getUserById(id);
      return {
        status: 200,
        message: 'Current user',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/')
  @ApiBody(updateBody)
  @ApiResponse(updateResponse)
  @ApiHeader(xAuthorization)
  async update(@Req() req: RequestType, @Body() body: UpdateDto) {
    try {
      const {id} = req.user;
      const data = await this.usersService.update(id, body);
      return {
        status: 200,
        message: 'User info has been updated successfully ',
        data,
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/password')
  @ApiBody(updatePasswordBody)
  @ApiResponse(emptyResponse('User response'))
  @ApiHeader(xAuthorization)
  async updatePassword(@Req() req: RequestType, @Body() body: updatePassword) {
    try {
      const {id} = req.user;
      await this.usersService.updatePassword(id, body);
      return {
        status: 200,
        message: 'Password has been updated successfully',
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Get('/email-verify/:token')
  @ApiParam({
    name: 'token',
    type: 'string'
  })
  @ApiResponse(verifyUserResponse)
  async verifyUser(@Param('token') token: string) {
    try {
      const id = await this.usersService.verifyToken(token, 'verify_email');
      const data = await this.usersService.verifyEmail(id);
      return {
        status: 200,
        message: 'User has been verified successfully',
        data
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Post('/forgot-password')
  @ApiBody(forgotPasswordBody)
  @ApiResponse(emptyResponse('User response'))
  async forgotPassword(@Body() body: forgotPassword) {
    try {
      await this.usersService.sendForgotCodeToEmail(body.email);
      return {
        status: 200,
        message: 'Verification code has sent to your email',
      };
    } catch (e) {
      return catchError(e);
    }
  }

  @Put('/accept-forgot-password')
  @ApiBody(acceptCodeForgotPasswordBody)
  @ApiResponse(emptyResponse('User response'))
  async acceptCodeForgotPassword(@Req() req: RequestType, @Body() body: acceptCodeForgotPassword) {
    try {
      await this.usersService.acceptCodeForgotPassword(body);
      return {
        status: 200,
        message: 'Password was changed',
      };
    } catch (e) {
      return catchError(e);
    }
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
    try {
      const {id} = req.user;
      const data = await this.usersService.uploadAvatar(id, file);
      return {
        status: 200,
        message: 'Avatar has ben uploaded',
        data
      };
    } catch (e) {
      return catchError(e);
    }
  }

}
