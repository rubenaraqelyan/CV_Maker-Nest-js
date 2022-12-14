import { LanguagesService } from "./languages.service";
import { RequestType, uuId } from "../dto/main.dto";
import { language } from "../dto/languages.dto";
export declare class LanguagesController {
    private readonly languageService;
    constructor(languageService: LanguagesService);
    create(req: RequestType, body: language): Promise<{
        status: string;
        message: string;
        data: import("./languages.model").languages;
    }>;
    getList(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./languages.model").languages[];
    }>;
    getById(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./languages.model").languages;
    }>;
    update(req: RequestType, param: uuId, body: language): Promise<{
        status: string;
        message: string;
        data: import("./languages.model").languages;
    }>;
    destroy(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./languages.model").languages;
    }>;
}
