import { Controller } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {SubscriptionsService} from "./subscriptions.service";

@ApiTags('Subscriptions')
@Controller('subscription')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}
}
