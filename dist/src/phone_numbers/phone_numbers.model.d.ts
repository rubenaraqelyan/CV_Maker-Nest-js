import { Model } from 'sequelize-typescript';
import { users } from "../users/users.model";
export declare class phone_numbers extends Model {
    id: string;
    user_id: string;
    code: string;
    phone_number: string;
    users: users;
}
