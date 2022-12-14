import {response} from "./main";

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

const signUpResponse = {
  description: "User response",
  schema: {
    properties: {
      ...response,
    }
  }
};

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

const signInResponse = {
  description: "User response",
  schema: {
    properties: {
      ...response,
      data: {
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
      }
    }
  }
};

const getMeResponse = {
  description: "User response",
  schema: {
    properties: {
      ...response,
      data: {
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
      }
    }
  }
};

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

const updateResponse = {
  description: "User response",
  schema: {
    properties: {
      ...response,
      data: {
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
      }
    }
  }
};

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

const verifyUserResponse = {
  description: "User response",
  schema: {
    properties: {
      ...response,
      data: {
        type: "object",
        properties: {
          token: {
            type: "string"
          }
        }
      }
    }
  }
};

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

export {
  signUpBody,
  signUpResponse,
  signInBody,
  signInResponse,
  getMeResponse,
  updateBody,
  updateResponse,
  verifyUserResponse,
  updatePasswordBody,
  forgotPasswordBody,
  acceptCodeForgotPasswordBody
}