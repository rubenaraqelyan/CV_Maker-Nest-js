import { Model } from 'sequelize-typescript';
import { users } from "../users/users.model";
export declare class bios extends Model {
    id: string;
    user_id: string;
    bio: string;
    users: users;
}
