import { phone_numbers } from './phone_numbers.model';
export declare class PhoneNumbersService {
    private PhoneNumbers;
    constructor(PhoneNumbers: typeof phone_numbers);
    create(id: any, data: any): Promise<phone_numbers>;
    getList(user_id: any): Promise<phone_numbers[]>;
    getById(user_id: any, id: any): Promise<phone_numbers>;
    update(user_id: any, id: any, dataUpdate: any): Promise<phone_numbers>;
}
