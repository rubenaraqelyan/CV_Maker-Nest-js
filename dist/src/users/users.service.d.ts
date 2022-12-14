import { users } from './users.model';
export declare class UsersService {
    private Users;
    constructor(Users: typeof users);
    signUp(data: any): Promise<void>;
    signIn(data: any): Promise<users>;
    getToken(id: any, prefix?: string): any;
    verifyToken(token: any, prefix?: string): Promise<any>;
    getUserById(id: any): Promise<users>;
    update(id: any, data: any): Promise<users>;
    updatePassword(id: any, data: any): Promise<[affectedCount: number]>;
    checkUsername(id: any, username: any): Promise<boolean>;
    checkEmail(email: any): Promise<boolean>;
    findById(id: any): Promise<users>;
    sendVerificationEmail(email: any, token: any): Promise<void>;
    verifyEmail(id: any): Promise<{
        token: any;
    }>;
    sendForgotCodeToEmail(email: any): Promise<any>;
    acceptCodeForgotPassword(data: any): Promise<[affectedCount: number]>;
}
