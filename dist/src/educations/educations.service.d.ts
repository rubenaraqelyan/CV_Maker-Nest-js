import { educations } from "./educations.model";
export declare class EducationsService {
    private Educations;
    constructor(Educations: typeof educations);
    create(id: any, data: any): Promise<educations>;
    getById(user_id: any, id: any): Promise<educations>;
    getList(user_id: any): Promise<educations[]>;
    update(user_id: any, id: any, dataUpdate: any): Promise<educations>;
    destroy(user_id: any, id: any): Promise<educations>;
}
