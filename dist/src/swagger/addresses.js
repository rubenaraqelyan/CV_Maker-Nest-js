"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddressesResponse = exports.createAddressResponse = exports.createAddressBody = void 0;
const main_1 = require("./main");
const createAddressBody = {
    schema: {
        properties: {
            address: {
                type: "string"
            },
            city: {
                type: "string"
            },
            country: {
                type: "string"
            },
            zip: {
                type: "string"
            }
        }
    }
};
exports.createAddressBody = createAddressBody;
const createAddressResponse = {
    description: "Address response",
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    user_id: {
                        type: "string"
                    },
                    address: {
                        type: "string"
                    },
                    city: {
                        type: "string"
                    },
                    country: {
                        type: "string"
                    },
                    zip: {
                        type: "string"
                    }
                },
            } })
    }
};
exports.createAddressResponse = createAddressResponse;
const getAddressesResponse = {
    description: "Get addresses",
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string"
                        },
                        user_id: {
                            type: "string"
                        },
                        address: {
                            type: "string"
                        },
                        city: {
                            type: "string"
                        },
                        country: {
                            type: "string"
                        },
                        zip: {
                            type: "string"
                        }
                    }
                }
            } })
    }
};
exports.getAddressesResponse = getAddressesResponse;
//# sourceMappingURL=addresses.js.map