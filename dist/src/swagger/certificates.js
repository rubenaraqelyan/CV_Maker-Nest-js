"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertificateResponse = exports.createCertificateResponse = exports.createCertificateBody = void 0;
const main_1 = require("./main");
const createCertificateBody = {
    description: "Certificate body",
    schema: {
        properties: {
            name: {
                type: "string"
            },
            url: {
                type: "string"
            },
            expaire_date: {
                type: "string"
            }
        }
    }
};
exports.createCertificateBody = createCertificateBody;
const createCertificateResponse = {
    description: "Certificate response",
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
                    name: {
                        type: "string"
                    },
                    url: {
                        type: "string"
                    },
                    expaire_date: {
                        type: "string"
                    }
                }
            } })
    }
};
exports.createCertificateResponse = createCertificateResponse;
const getCertificateResponse = {
    description: "Certificates response",
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
                        name: {
                            type: "string"
                        },
                        url: {
                            type: "string"
                        },
                        expaire_date: {
                            type: "string"
                        }
                    },
                }
            } })
    }
};
exports.getCertificateResponse = getCertificateResponse;
//# sourceMappingURL=certificates.js.map