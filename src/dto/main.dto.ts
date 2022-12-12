import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";
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