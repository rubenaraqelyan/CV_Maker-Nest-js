"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageResponse = exports.createLanguageResponse = exports.createLanguageBody = void 0;
const main_1 = require("./main");
const createLanguageBody = {
    schema: {
        properties: {
            language: {
                type: "string"
            },
            level: {
                type: "string"
            }
        }
    }
};
exports.createLanguageBody = createLanguageBody;
const createLanguageResponse = {
    description: "Language response",
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
                    language: {
                        type: "string"
                    },
                    level: {
                        type: "string"
                    }
                },
            } })
    }
};
exports.createLanguageResponse = createLanguageResponse;
const getLanguageResponse = {
    description: "Languages response",
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
                        language: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        }
                    },
                }
            } })
    }
};
exports.getLanguageResponse = getLanguageResponse;
//# sourceMappingURL=languages.js.map