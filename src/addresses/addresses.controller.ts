import { Controller } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('addresses')
@Controller('addresses')
export class AddressesController {}
