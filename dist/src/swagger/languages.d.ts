declare const createLanguageBody: {
    schema: {
        properties: {
            language: {
                type: string;
            };
            level: {
                type: string;
            };
        };
    };
};
declare const createLanguageResponse: {
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
                    language: {
                        type: string;
                    };
                    level: {
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
declare const getLanguageResponse: {
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
                        language: {
                            type: string;
                        };
                        level: {
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
export { createLanguageBody, createLanguageResponse, getLanguageResponse };
