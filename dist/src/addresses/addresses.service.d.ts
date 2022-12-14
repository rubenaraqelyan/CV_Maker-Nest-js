import { addresses } from "./addresses.model";
export declare class AddressesService {
    private Addresses;
    constructor(Addresses: typeof addresses);
    create(id: any, data: any): Promise<addresses>;
    update(user_id: any, id: any, data: any): Promise<addresses>;
    getById(user_id: any, id: any): Promise<addresses>;
    getList(user_id: any): Promise<addresses[]>;
    destroy(user_id: any, id: any): Promise<addresses>;
}
