"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptCodeForgotPasswordBody = exports.forgotPasswordBody = exports.updatePasswordBody = exports.verifyUserResponse = exports.updateResponse = exports.updateBody = exports.getMeResponse = exports.signInResponse = exports.signInBody = exports.signUpResponse = exports.signUpBody = void 0;
const main_1 = require("./main");
const signUpBody = {
    description: "User body",
    schema: {
        properties: {
            name: {
                type: "string"
            },
            username: {
                type: "string"
            },
            email: {
                type: "string"
            },
            password: {
                type: "string"
            },
            socials: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        url: {
                            type: "string"
                        }
                    }
                }
            }
        }
    }
};
exports.signUpBody = signUpBody;
const signUpResponse = {
    description: "User response",
    schema: {
        properties: Object.assign({}, main_1.response)
    }
};
exports.signUpResponse = signUpResponse;
const signInBody = {
    description: "User body",
    schema: {
        properties: {
            email: {
                type: "string"
            },
            password: {
                type: "string"
            }
        }
    }
};
exports.signInBody = signInBody;
const signInResponse = {
    description: "User response",
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    name: {
                        type: "string"
                    },
                    username: {
                        type: "string"
                    },
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                    image: {
                        type: "string"
                    },
                    verified_at: {
                        type: "string"
                    },
                    socials: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        }
                    }
                },
                token: {
                    type: "string"
                }
            } })
    }
};
exports.signInResponse = signInResponse;
const getMeResponse = {
    description: "User response",
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    name: {
                        type: "string"
                    },
                    username: {
                        type: "string"
                    },
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                    image: {
                        type: "string"
                    },
                    verified_at: {
                        type: "string"
                    },
                    socials: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            } })
    }
};
exports.getMeResponse = getMeResponse;
const updateBody = {
    description: "User body",
    schema: {
        properties: {
            name: {
                type: "string"
            },
            username: {
                type: "string"
            },
            socials: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        url: {
                            type: "string"
                        }
                    }
                }
            }
        }
    }
};
exports.updateBody = updateBody;
const updateResponse = {
    description: "User response",
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                    name: {
                        type: "string"
                    },
                    username: {
                        type: "string"
                    },
                    image: {
                        type: "string"
                    },
                    verified_at: {
                        type: "string"
                    },
                    socials: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                },
                                url: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            } })
    }
};
exports.updateResponse = updateResponse;
const updatePasswordBody = {
    description: "User body",
    schema: {
        properties: {
            password: {
                type: "string"
            }
        }
    }
};
exports.updatePasswordBody = updatePasswordBody;
const forgotPasswordBody = {
    description: "User body",
    schema: {
        properties: {
            email: {
                type: "string"
            }
        }
    }
};
exports.forgotPasswordBody = forgotPasswordBody;
const verifyUserResponse = {
    description: "User response",
    schema: {
        properties: Object.assign(Object.assign({}, main_1.response), { data: {
                type: "object",
                properties: {
                    token: {
                        type: "string"
                    }
                }
            } })
    }
};
exports.verifyUserResponse = verifyUserResponse;
const acceptCodeForgotPasswordBody = {
    description: "User body",
    schema: {
        properties: {
            code: {
                type: "string"
            },
            password: {
                type: "string"
            }
        }
    }
};
exports.acceptCodeForgotPasswordBody = acceptCodeForgotPasswordBody;
//# sourceMappingURL=users.js.map