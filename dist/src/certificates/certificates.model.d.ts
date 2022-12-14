import { Model } from 'sequelize-typescript';
import { users } from "../users/users.model";
export declare class certificates extends Model {
    id: string;
    user_id: string;
    name: string;
    url: string;
    expaire_date: string;
    users: users;
}
