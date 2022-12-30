import {ApiProperty} from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
  IsEmail, IsArray, IsOptional, ValidateNested
} from 'class-validator';
import {Type} from "class-transformer";

class socialsDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly url: string;
}
export class UserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => socialsDto)
  readonly socials: socialsDto[];
}

export class UserLoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class UpdateDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => socialsDto)
  readonly socials: socialsDto[];
}
export class updatePassword {
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class forgotPassword {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;
}
export class acceptCodeForgotPassword {
  @IsNotEmpty()
  @IsString()
  readonly code: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}