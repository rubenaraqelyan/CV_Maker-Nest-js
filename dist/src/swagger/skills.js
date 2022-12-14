"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkillResponse = exports.createSkillResponse = exports.createSkillBody = void 0;
const main_1 = require("./main");
const createSkillBody = {
    schema: {
        properties: {
            skill: {
                type: "string"
            }
        }
    }
};
exports.createSkillBody = createSkillBody;
const createSkillResponse = {
    description: "Skill response",
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
                    skill: {
                        type: "string"
                    }
                },
            } })
    }
};
exports.createSkillResponse = createSkillResponse;
const getSkillResponse = {
    description: "Skill response",
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
                        skill: {
                            type: "string"
                        }
                    },
                }
            } })
    }
};
exports.getSkillResponse = getSkillResponse;
//# sourceMappingURL=skills.js.map