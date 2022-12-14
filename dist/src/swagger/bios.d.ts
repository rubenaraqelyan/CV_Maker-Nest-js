declare const createBioBody: {
    schema: {
        properties: {
            bio: {
                type: string;
            };
        };
    };
};
declare const createBioResponse: {
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
                    bio: {
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
declare const getBioResponse: {
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
                        bio: {
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
export { createBioBody, createBioResponse, getBioResponse };
