import { CertificatesService } from "./certificates.service";
import { RequestType, uuId } from "../dto/main.dto";
import { certificates } from "../dto/certificates.dto";
export declare class CertificatesController {
    private readonly certificatesService;
    constructor(certificatesService: CertificatesService);
    create(req: RequestType, body: certificates): Promise<{
        status: string;
        message: string;
        data: import("./certificates.model").certificates;
    }>;
    getList(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./certificates.model").certificates[];
    }>;
    getById(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./certificates.model").certificates;
    }>;
    update(req: RequestType, param: uuId, body: certificates): Promise<{
        status: string;
        message: string;
        data: import("./certificates.model").certificates;
    }>;
    destroy(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./certificates.model").certificates;
    }>;
}
