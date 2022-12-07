import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class UsersDto {
  readonly id?: string;

  @ApiModelProperty({ description: '', required: true })
  @IsString()
  readonly name: string;

  @ApiModelProperty({ description: '', required: true })
  @IsInt()
  @Min(18, {
    message: '18 min value',
  })
  @Max(56)
  readonly age: number;
}
