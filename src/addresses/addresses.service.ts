import { Injectable } from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {addresses} from "../addresses/addresses.model";

@Injectable()
export class AddressesService {
  constructor(
    @InjectSqlModel(addresses) private Addresses: typeof addresses
  ) {}
}
