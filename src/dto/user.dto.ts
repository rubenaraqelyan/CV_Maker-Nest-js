import {ApiProperty} from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
  IsObject, IsInt, Min, Max, IsEmail, IsArray
} from 'class-validator';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

class Socials {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()

  readonly url: string;
}
// class Foobar{
//   @ApiModelProperty({type: [Socials]})
//   socials: string;
// }


export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty()
  @IsArray()
  readonly socials: Socials;
}

export class UsersCreateResDto {
  @ApiProperty()
  readonly id: string;
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly socials: Socials;

  @ApiProperty()
  readonly verified_at: string;

  @ApiProperty()
  readonly created_at: string;

  @ApiProperty()
  readonly updated_at: string;

  @ApiProperty()
  readonly deleted_at: string;
}

export class UserLoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}