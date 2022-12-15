import {HttpException, HttpStatus, Injectable, NestMiddleware} from '@nestjs/common';
import {RequestType, response, next, } from '../dto/main.dto';
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private usersService: UsersService) {}
  async use(req: RequestType, res: response, next: next) {
    try {
      const token = req.headers['x-authorization'];
      if (token) {
        const id = await this.usersService.verifyToken(token);
        if (!id) next(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        const user = await this.usersService.findById(id);
        if (!user) next(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
        req.user = user['dataValues'];
        return next();
      }
      next(new HttpException('Forbidden', HttpStatus.FORBIDDEN));
    } catch (e) {
      return next(new HttpException(`${e.name} ${e.message}`, HttpStatus.FORBIDDEN));
    }
  }
}
