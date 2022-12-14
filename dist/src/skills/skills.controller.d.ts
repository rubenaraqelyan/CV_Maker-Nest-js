import { SkillsService } from "./skills.service";
import { RequestType, uuId } from "../dto/main.dto";
import { skill } from "../dto/skills.dto";
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    create(req: RequestType, body: skill): Promise<{
        status: string;
        message: string;
        data: import("./skills.model").skills;
    }>;
    getList(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./skills.model").skills[];
    }>;
    getById(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./skills.model").skills;
    }>;
    update(req: RequestType, param: uuId, body: skill): Promise<{
        status: string;
        message: string;
        data: import("./skills.model").skills;
    }>;
    destroy(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./skills.model").skills;
    }>;
}
