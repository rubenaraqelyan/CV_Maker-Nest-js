import { UsersService } from './users.service';
import { acceptCodeForgotPassword, forgotPassword, UpdateDto, updatePassword, UserDto, UserLoginDto } from '../dto/user.dto';
import { RequestType } from "../dto/main.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(body: UserDto): Promise<{
        status: string;
        message: string;
        data: void;
    }>;
    signIn(body: UserLoginDto): Promise<{
        status: string;
        message: string;
        data: import("./users.model").users;
        token: any;
    }>;
    getMe(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./users.model").users;
    }>;
    update(req: RequestType, body: UpdateDto): Promise<{
        status: string;
        message: string;
        data: import("./users.model").users;
    }>;
    updatePassword(req: RequestType, body: updatePassword): Promise<{
        status: string;
        message: string;
    }>;
    verifyUser(req: RequestType, token: string): Promise<{
        status: string;
        message: string;
        data: {
            token: any;
        };
    }>;
    forgotPassword(req: RequestType, body: forgotPassword): Promise<{
        status: string;
        message: string;
    }>;
    acceptCodeForgotPassword(req: RequestType, body: acceptCodeForgotPassword): Promise<{
        status: string;
        message: string;
    }>;
}
