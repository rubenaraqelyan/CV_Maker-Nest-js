import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString, IsUUID} from "class-validator";
import { NextFunction, Request, Response } from 'express';

export type response = Response;
export type next = NextFunction;

class requestUser {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    image: string;
    verified_at: string | null;
    socials: string;
}

export interface RequestType extends Request {
  user: requestUser
}

export class uuId {
    @IsNotEmpty()
    @IsString()
    @IsUUID('4')
    readonly id: string;
}