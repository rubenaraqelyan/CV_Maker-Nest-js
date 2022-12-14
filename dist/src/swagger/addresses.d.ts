declare const createAddressBody: {
    schema: {
        properties: {
            address: {
                type: string;
            };
            city: {
                type: string;
            };
            country: {
                type: string;
            };
            zip: {
                type: string;
            };
        };
    };
};
declare const createAddressResponse: {
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
                    address: {
                        type: string;
                    };
                    city: {
                        type: string;
                    };
                    country: {
                        type: string;
                    };
                    zip: {
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
declare const getAddressesResponse: {
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
                        address: {
                            type: string;
                        };
                        city: {
                            type: string;
                        };
                        country: {
                            type: string;
                        };
                        zip: {
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
export { createAddressBody, createAddressResponse, getAddressesResponse, };
