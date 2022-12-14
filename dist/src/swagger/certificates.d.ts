declare const createCertificateBody: {
    description: string;
    schema: {
        properties: {
            name: {
                type: string;
            };
            url: {
                type: string;
            };
            expaire_date: {
                type: string;
            };
        };
    };
};
declare const createCertificateResponse: {
    description: string;
    schema: {
        properties: {
            data: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    user_id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    url: {
                        type: string;
                    };
                    expaire_date: {
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
declare const getCertificateResponse: {
    description: string;
    schema: {
        properties: {
            data: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                        };
                        user_id: {
                            type: string;
                        };
                        name: {
                            type: string;
                        };
                        url: {
                            type: string;
                        };
                        expaire_date: {
                            type: string;
                        };
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
export { createCertificateBody, createCertificateResponse, getCertificateResponse };
