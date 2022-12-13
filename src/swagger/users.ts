import {response} from "./main";

const signUpBody = {
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
  description: "Sign up user",
  schema: {
    properties: {
      ...response,
      // data: {
      //   type: "object",
      //   properties: {
      //     name: {
      //       type: "string"
      //     },
      //     username: {
      //       type: "string"
      //     },
      //     email: {
      //       type: "string"
      //     },
      //     password: {
      //       type: "string"
      //     },
      //     socials: {
      //       type: "array",
      //       items: {
      //         type: "object",
      //         properties: {
      //           name: {
      //             type: "string"
      //           },
      //           url: {
      //             type: "string"
      //           }
      //         }
      //       }
      //     }
      //   },
      // }
    }
  }
};

const signInBody = {
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
  description: "Sign in user",
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
  description: "Get current user",
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
  description: "User successfully updated",
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
  schema: {
    properties: {
      password: {
        type: "string"
      }
    }
  }
};

const updatePasswordResponse = {
  description: "Password successfully updated",
  schema: {
    properties: {
      ...response,
    }
  }
};

const forgotPasswordBody = {
  schema: {
    properties: {
      email: {
        type: "string"
      }
    }
  }
};

const verifyUserResponse = {
  description: "User successfully verified",
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

const forgotPasswordResponse = {
  description: "Verification code sent to your email",
  schema: {
    properties: {
      ...response,
    }
  }
};

const acceptCodeForgotPasswordBody = {
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

const acceptCodeForgotPasswordResponse = {
  description: "Password changed",
  schema: {
    properties: {
      ...response,
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
  updatePasswordResponse,
  forgotPasswordBody,
  forgotPasswordResponse,
  acceptCodeForgotPasswordBody,
  acceptCodeForgotPasswordResponse
}