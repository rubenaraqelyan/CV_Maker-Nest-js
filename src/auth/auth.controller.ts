import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from '../services/GoogleGuard';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {UsersService} from "../users/users.service";
import {RequestType} from "../dto/main.dto";
import {OAuthLoginResponse, OAuthRedirectResponse, verifyUserResponse} from "../swagger/users";

@ApiTags('Google OAuth')
@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Get('google/login')
  @ApiResponse(OAuthLoginResponse)
  @UseGuards(GoogleAuthGuard)
  handleLogin(@Req() req: RequestType) {
    console.log(req)
  }

  @Get('google/redirect')
  @ApiResponse(OAuthRedirectResponse)
  @UseGuards(GoogleAuthGuard)
  handleRedirect(@Req() req: RequestType) {
    const {id} = req.user;
    const token = this.usersService.getToken(id);
    return {
      status: 'success',
      message: 'Google social login',
      data: {token}
    };
  }

}