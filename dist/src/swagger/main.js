"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xAuthorization = exports.emptyResponse = exports.response = void 0;
const response = {
    status: {
        type: "string"
    },
    message: {
        type: "string"
    }
};
exports.response = response;
const xAuthorization = {
    name: 'x-authorization',
    description: 'Authorization',
    required: true
};
exports.xAuthorization = xAuthorization;
const emptyResponse = (description) => ({
    description: description,
    schema: {
        properties: Object.assign({}, response)
    }
});
exports.emptyResponse = emptyResponse;
//# sourceMappingURL=main.js.map