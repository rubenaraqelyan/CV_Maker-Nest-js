import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";
import { NextFunction, Request, Response } from 'express';

export type request = Request;
export type response = Response;
export type next = NextFunction;

export class RequestType extends Request {
  user: object
}
export class responseDto {
  @ApiProperty({example: 'name', description: 'Please enter your name'})
  @IsString()
  @IsNotEmpty()
  readonly status: string;

  @ApiProperty({example: 'name', description: 'Please enter your name'})
  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @ApiProperty({example: 'name', description: 'Please enter your name'})
  @IsString()
  @IsNotEmpty()
  data: object | any
}