/// <reference types="node" />
import { NextFunction, Request, Response } from 'express';
export type response = Response;
export type next = NextFunction;
declare class requestUser {
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
    user: requestUser;
}
export declare class uuId {
    readonly id: string;
}
export interface File {
    readonly fieldname: string;
    readonly originalname: string;
    readonly encoding: string;
    readonly mimetype: string;
    readonly buffer: Buffer;
    size: number;
}
export {};
