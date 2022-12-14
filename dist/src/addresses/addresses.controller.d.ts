import { AddressesService } from "./addresses.service";
import { RequestType, uuId } from "../dto/main.dto";
import { address } from "../dto/address.dto";
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    getList(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./addresses.model").addresses[];
    }>;
    create(req: RequestType, body: address): Promise<{
        status: string;
        message: string;
        data: import("./addresses.model").addresses;
    }>;
    getById(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./addresses.model").addresses;
    }>;
    update(req: RequestType, body: address, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./addresses.model").addresses;
    }>;
    destroy(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./addresses.model").addresses;
    }>;
}
