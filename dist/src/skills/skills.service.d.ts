import { skills } from "./skills.model";
export declare class SkillsService {
    private Skills;
    constructor(Skills: typeof skills);
    create(id: any, data: any): Promise<skills>;
    getById(user_id: any, id: any): Promise<skills>;
    getList(user_id: any): Promise<skills[]>;
    update(user_id: any, id: any, dataUpdate: any): Promise<skills>;
    destroy(user_id: any, id: any): Promise<skills>;
}
