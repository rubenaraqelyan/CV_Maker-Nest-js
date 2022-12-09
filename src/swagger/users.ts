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
      data: {
        type: "object",
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
        },
      }
    }
  }
};

const signInBody = {
  schema: {
    properties: {
      username: {
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

export {
  signUpBody,
  signUpResponse,
  signInBody,
  signInResponse,
  getMeResponse,
}