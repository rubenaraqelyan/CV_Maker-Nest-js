declare const signUpBody: {
    description: string;
    schema: {
        properties: {
            name: {
                type: string;
            };
            username: {
                type: string;
            };
            email: {
                type: string;
            };
            password: {
                type: string;
            };
            socials: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        url: {
                            type: string;
                        };
                    };
                };
            };
        };
    };
};
declare const signUpResponse: {
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
declare const signInBody: {
    description: string;
    schema: {
        properties: {
            email: {
                type: string;
            };
            password: {
                type: string;
            };
        };
    };
};
declare const signInResponse: {
    description: string;
    schema: {
        properties: {
            data: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    username: {
                        type: string;
                    };
                    email: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    image: {
                        type: string;
                    };
                    verified_at: {
                        type: string;
                    };
                    socials: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                url: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                token: {
                    type: string;
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
declare const getMeResponse: {
    description: string;
    schema: {
        properties: {
            data: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    username: {
                        type: string;
                    };
                    email: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    image: {
                        type: string;
                    };
                    verified_at: {
                        type: string;
                    };
                    socials: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                url: {
                                    type: string;
                                };
                            };
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
declare const updateBody: {
    description: string;
    schema: {
        properties: {
            name: {
                type: string;
            };
            username: {
                type: string;
            };
            socials: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        name: {
                            type: string;
                        };
                        url: {
                            type: string;
                        };
                    };
                };
            };
        };
    };
};
declare const updateResponse: {
    description: string;
    schema: {
        properties: {
            data: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    username: {
                        type: string;
                    };
                    image: {
                        type: string;
                    };
                    verified_at: {
                        type: string;
                    };
                    socials: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                url: {
                                    type: string;
                                };
                            };
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
declare const updatePasswordBody: {
    description: string;
    schema: {
        properties: {
            password: {
                type: string;
            };
        };
    };
};
declare const forgotPasswordBody: {
    description: string;
    schema: {
        properties: {
            email: {
                type: string;
            };
        };
    };
};
declare const verifyUserResponse: {
    description: string;
    schema: {
        properties: {
            data: {
                type: string;
                properties: {
                    token: {
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
declare const acceptCodeForgotPasswordBody: {
    description: string;
    schema: {
        properties: {
            code: {
                type: string;
            };
            password: {
                type: string;
            };
        };
    };
};
declare const uploadAvatarBody: {
    schema: {
        type: string;
        properties: {
            file: {
                type: string;
                format: string;
            };
        };
    };
};
export { signUpBody, signUpResponse, signInBody, signInResponse, getMeResponse, updateBody, updateResponse, verifyUserResponse, updatePasswordBody, forgotPasswordBody, acceptCodeForgotPasswordBody, uploadAvatarBody };
