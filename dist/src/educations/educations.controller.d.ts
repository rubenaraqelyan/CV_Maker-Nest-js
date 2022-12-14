import { EducationsService } from "./educations.service";
import { RequestType, uuId } from "../dto/main.dto";
import { educations } from "../dto/educations.dto";
export declare class EducationsController {
    private readonly educationsService;
    constructor(educationsService: EducationsService);
    create(req: RequestType, body: educations): Promise<{
        status: string;
        message: string;
        data: import("./educations.model").educations;
    }>;
    getList(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./educations.model").educations[];
    }>;
    getById(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./educations.model").educations;
    }>;
    update(req: RequestType, param: uuId, body: educations): Promise<{
        status: string;
        message: string;
        data: import("./educations.model").educations;
    }>;
    destroy(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./educations.model").educations;
    }>;
}
