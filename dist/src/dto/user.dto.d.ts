declare class socialsDto {
    readonly name: string;
    readonly url: string;
}
export declare class UserDto {
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly socials: socialsDto[];
}
export declare class UserLoginDto {
    readonly email: string;
    readonly password: string;
}
export declare class UpdateDto {
    readonly name: string;
    readonly username: string;
    readonly socials: socialsDto[];
}
export declare class updatePassword {
    readonly password: string;
}
export declare class forgotPassword {
    readonly email: string;
}
export declare class acceptCodeForgotPassword {
    readonly code: string;
    readonly password: string;
}
export {};
