import {ApiProperty} from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
export class skill {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly skill: string;

}