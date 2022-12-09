import {forwardRef, HttpException, HttpStatus, Inject, Injectable, NestMiddleware} from '@nestjs/common';
import {RequestType, response, next, } from '../dto/main.dto';
import * as JWT from 'jsonwebtoken';
import {UsersService} from "../users/users.service";
const {JWT_SECRET} = process.env;

@Injectable()
export class AuthService implements NestMiddleware {
  constructor(private usersService: UsersService) {}
  async use(req: RequestType, res: response, next: next) {
    try {
      const token = req.headers['x-authorization'];
      if (token) {
        const decoded = await JWT.verify(token, JWT_SECRET);
        console.log(8888, decoded)
        if (!decoded) next(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        const user = await this.usersService.findById(decoded.id);
        if (!user) next(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        req.user = user;
        return next();
      }
      next(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
    } catch (e) {
      console.log(e)
      return next(new HttpException(e.name, HttpStatus.FORBIDDEN));
    }
  }
}
