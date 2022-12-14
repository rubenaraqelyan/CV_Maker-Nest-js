import { Model } from 'sequelize-typescript';
import { users } from "../users/users.model";
export declare class addresses extends Model {
    id: string;
    user_id: string;
    address: string;
    city: string;
    country: string;
    zip: string;
    users: users;
}
