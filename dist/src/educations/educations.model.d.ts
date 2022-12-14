import { Model } from 'sequelize-typescript';
import { users } from "../users/users.model";
export declare class educations extends Model {
    id: string;
    user_id: string;
    title: string;
    start_date: string;
    end_date: string;
    users: users;
}
