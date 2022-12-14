import { certificates } from "./certificates.model";
export declare class CertificatesService {
    private Certificates;
    constructor(Certificates: typeof certificates);
    create(id: any, data: any): Promise<certificates>;
    getById(user_id: any, id: any): Promise<certificates>;
    getList(user_id: any): Promise<certificates[]>;
    update(user_id: any, id: any, dataUpdate: any): Promise<certificates>;
    destroy(user_id: any, id: any): Promise<certificates>;
}
