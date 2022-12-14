declare const createEducationBody: {
    description: string;
    schema: {
        properties: {
            title: {
                type: string;
            };
            start_date: {
                type: string;
            };
            end_date: {
                type: string;
            };
        };
    };
};
declare const createEducationResponse: {
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
                    title: {
                        type: string;
                    };
                    start_date: {
                        type: string;
                    };
                    end_date: {
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
declare const getEducationResponse: {
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
                        title: {
                            type: string;
                        };
                        start_date: {
                            type: string;
                        };
                        end_date: {
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
export { createEducationBody, createEducationResponse, getEducationResponse };
