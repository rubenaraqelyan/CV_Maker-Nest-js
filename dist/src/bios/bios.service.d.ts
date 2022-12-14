import { bios } from "./bios.model";
export declare class BiosService {
    private Bios;
    constructor(Bios: typeof bios);
    create(id: any, data: any): Promise<bios>;
    getById(user_id: any, id: any): Promise<bios>;
    getList(user_id: any): Promise<bios[]>;
    update(user_id: any, id: any, dataUpdate: any): Promise<bios>;
    destroy(user_id: any, id: any): Promise<bios>;
}
