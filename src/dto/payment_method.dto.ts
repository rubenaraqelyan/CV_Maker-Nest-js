import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class payment_method {
  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsNumber()
  @IsNotEmpty()
  readonly card_number: number;

  @IsNumber()
  @IsNotEmpty()
  readonly exp_month: number;

  @IsNumber()
  @IsNotEmpty()
  readonly exp_year: number;

  @IsNumber()
  @IsNotEmpty()
  readonly cvc: number;
}