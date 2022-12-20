import { Module } from '@nestjs/common';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {plans} from "./plans.model";
import {users_plans} from "./users_plans.model";
import {users} from "../users/users.model";
import {languages} from "../languages/languages.model";

@Module({
  imports: [SequelizeModule.forFeature([users, plans, users_plans, languages])],
  controllers: [PlansController],
  providers: [PlansService]
})
export class PlansModule {}
