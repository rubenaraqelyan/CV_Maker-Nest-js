import { languages } from "./languages.model";
export declare class LanguagesService {
    private Languages;
    constructor(Languages: typeof languages);
    create(id: any, data: any): Promise<languages>;
    getById(user_id: any, id: any): Promise<languages>;
    getList(user_id: any): Promise<languages[]>;
    update(user_id: any, id: any, dataUpdate: any): Promise<languages>;
    destroy(user_id: any, id: any): Promise<languages>;
}
