declare const response: {
    status: {
        type: string;
    };
    message: {
        type: string;
    };
};
declare const xAuthorization: {
    name: string;
    description: string;
    required: boolean;
};
declare const emptyResponse: (description: string) => {
    description: string;
    schema: {
        properties: {
            status: {
                type: string;
            };
            message: {
                type: string;
            };
        };
    };
};
export { response, emptyResponse, xAuthorization, };
