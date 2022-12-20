import { Injectable } from '@nestjs/common';
import {InjectSqlModel} from "../database/inject-model-sql";
import {subscriptions} from "./subscriptions.model";

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectSqlModel(subscriptions) private Subscriptions: typeof subscriptions
  ) {}

}
