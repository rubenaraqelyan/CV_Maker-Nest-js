declare const createSkillBody: {
    schema: {
        properties: {
            skill: {
                type: string;
            };
        };
    };
};
declare const createSkillResponse: {
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
                    skill: {
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
declare const getSkillResponse: {
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
                        skill: {
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
export { createSkillBody, createSkillResponse, getSkillResponse, };
