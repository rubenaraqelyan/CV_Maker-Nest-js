import { NestMiddleware } from '@nestjs/common';
import { RequestType, response, next } from '../dto/main.dto';
import { UsersService } from "../users/users.service";
export declare class AuthService implements NestMiddleware {
    private usersService;
    constructor(usersService: UsersService);
    use(req: RequestType, res: response, next: next): Promise<void>;
}
