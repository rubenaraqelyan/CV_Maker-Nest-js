"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEducationResponse = exports.createEducationResponse = exports.createEducationBody = void 0;
const main_1 = require("./main");
const createEducationBody = {
    description: "Education body",
    schema: {
        properties: {
            title: {
                type: "string"
            },
            start_date: {
                type: "string"
            },
            end_date: {
                type: "string"
            }
        }
    }
};
exports.createEducationBody = createEducationBody;
const createEducationResponse = {
    description: "Education response",
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
                    title: {
                        type: "string"
                    },
                    start_date: {
                        type: "string"
                    },
                    end_date: {
                        type: "string"
                    }
                }
            } })
    }
};
exports.createEducationResponse = createEducationResponse;
const getEducationResponse = {
    description: "Education response",
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
                        title: {
                            type: "string"
                        },
                        start_date: {
                            type: "string"
                        },
                        end_date: {
                            type: "string"
                        }
                    },
                }
            } })
    }
};
exports.getEducationResponse = getEducationResponse;
//# sourceMappingURL=educations.js.map