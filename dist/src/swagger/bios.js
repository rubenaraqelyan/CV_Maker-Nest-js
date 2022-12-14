"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBioResponse = exports.createBioResponse = exports.createBioBody = void 0;
const main_1 = require("./main");
const createBioBody = {
    schema: {
        properties: {
            bio: {
                type: "string"
            }
        }
    }
};
exports.createBioBody = createBioBody;
const createBioResponse = {
    description: "Bios response",
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
                    bio: {
                        type: "string"
                    }
                },
            } })
    }
};
exports.createBioResponse = createBioResponse;
const getBioResponse = {
    description: "Bios response",
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
                        bio: {
                            type: "string"
                        }
                    },
                }
            } })
    }
};
exports.getBioResponse = getBioResponse;
//# sourceMappingURL=bios.js.map