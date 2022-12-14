import { RequestType, uuId } from "../dto/main.dto";
import { BiosService } from "./bios.service";
import { bio } from "../dto/bios.dto";
export declare class BiosController {
    private readonly biosService;
    constructor(biosService: BiosService);
    create(req: RequestType, body: bio): Promise<{
        status: string;
        message: string;
        data: import("./bios.model").bios;
    }>;
    getList(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./bios.model").bios[];
    }>;
    getById(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./bios.model").bios;
    }>;
    update(req: RequestType, param: uuId, body: bio): Promise<{
        status: string;
        message: string;
        data: import("./bios.model").bios;
    }>;
    destroy(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./bios.model").bios;
    }>;
}
