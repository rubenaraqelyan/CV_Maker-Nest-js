"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhoneNumbersResponse = exports.createPhoneNumberResponse = exports.createPhoneNumberBody = void 0;
const main_1 = require("./main");
const createPhoneNumberBody = {
    schema: {
        properties: {
            code: {
                type: 'string',
            },
            phone_number: {
                type: 'string',
            },
        },
    },
};
exports.createPhoneNumberBody = createPhoneNumberBody;
const createPhoneNumberResponse = {
    description: 'Create Phone number',
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                    },
                    code: {
                        type: 'string',
                    },
                    phone_number: {
                        type: 'string',
                    },
                    user_id: {
                        type: 'string',
                    },
                },
            } }),
    },
};
exports.createPhoneNumberResponse = createPhoneNumberResponse;
const getPhoneNumbersResponse = {
    description: 'Phone number list response',
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                        },
                        code: {
                            type: 'string',
                        },
                        phone_number: {
                            type: 'string',
                        },
                        user_id: {
                            type: 'string',
                        },
                    },
                },
            } }),
    },
};
exports.getPhoneNumbersResponse = getPhoneNumbersResponse;
//# sourceMappingURL=phone_numbers.js.map