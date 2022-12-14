import { Model } from 'sequelize-typescript';
import { users } from "../users/users.model";
export declare class languages extends Model {
    id: string;
    user_id: string;
    bios: string;
    users: users;
}
