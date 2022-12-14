declare const createPhoneNumberBody: {
    schema: {
        properties: {
            code: {
                type: string;
            };
            phone_number: {
                type: string;
            };
        };
    };
};
declare const createPhoneNumberResponse: {
    description: string;
    schema: {
        properties: {
            data: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    code: {
                        type: string;
                    };
                    phone_number: {
                        type: string;
                    };
                    user_id: {
                        type: string;
                    };
                };
            };
            status: {
                type: string;
            };
            message: {
                type: string;
            };
        };
    };
};
export { createPhoneNumberBody, createPhoneNumberResponse };
