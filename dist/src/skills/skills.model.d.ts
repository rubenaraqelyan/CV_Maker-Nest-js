import { Model } from 'sequelize-typescript';
import { users } from "../users/users.model";
export declare class skills extends Model {
    id: string;
    user_id: string;
    skill: string;
    users: users;
}
