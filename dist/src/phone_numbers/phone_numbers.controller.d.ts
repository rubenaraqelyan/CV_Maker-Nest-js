import { RequestType, uuId } from 'src/dto/main.dto';
import { phone_number } from 'src/dto/phone_number.dto';
import { PhoneNumbersService } from './phone_numbers.service';
export declare class PhoneNumbersController {
    private readonly phoneNumbersService;
    constructor(phoneNumbersService: PhoneNumbersService);
    createPhoneNumber(req: RequestType, body: phone_number): Promise<{
        status: string;
        message: string;
        data: import("./phone_numbers.model").phone_numbers;
    }>;
    getList(req: RequestType): Promise<{
        status: string;
        message: string;
        data: import("./phone_numbers.model").phone_numbers[];
    }>;
    getById(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./phone_numbers.model").phone_numbers;
    }>;
    update(req: RequestType, param: uuId, body: phone_number): Promise<{
        status: string;
        message: string;
        data: import("./phone_numbers.model").phone_numbers;
    }>;
    destroy(req: RequestType, param: uuId): Promise<{
        status: string;
        message: string;
        data: import("./phone_numbers.model").phone_numbers;
    }>;
}
