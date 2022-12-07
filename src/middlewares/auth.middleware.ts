import { Injectable, NestMiddleware } from '@nestjs/common';
import { request, response, next } from '../dto/controller.dto';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(request: request, response: response, next: next) {
    console.log('ssssssssssssssssssssssssss');
    next();
  }
}
