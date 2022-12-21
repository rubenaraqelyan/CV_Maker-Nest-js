import {response} from "./main";

const createPlanBody = {
  schema: {
    properties: {
      name: {
        type: "string"
      },
      number: {
        type: "number"
      },
      disabled: {
        type: "boolean",
        require: "false"
      },
      price: {
        type: "number"
      },
    }
  }
};

const createPlanResponse = {
  description: "Plan response",
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
          number: {
            type: "number"
          },
          disabled: {
            type: "boolean",
          },
          price: {
            type: "number"
          },
          product_id: {
            type: "string",
          },
          price_id: {
            type: "string",
          }
        },
      }
    }
  }
};

const getPlanResponse = {
  description: "Plan response",
  schema: {
    properties: {
      ...response,
      data: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string"
            },
            name: {
              type: "string"
            },
            number: {
              type: "number"
            },
            disabled: {
              type: "boolean",
            },
            price: {
              type: "number"
            },
            product_id: {
              type: "string",
            },
            price_id: {
              type: "string",
            }
          },
        }
      }
    }
  }
};

const connectPlanResponse = {
  description: "Connect plan response",
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
          number: {
            type: "string"
          },
          disabled: {
            type: "string"
          },
          price: {
            type: "string"
          },
          product_id: {
            type: "string",
          },
          price_id: {
            type: "string"
          }
        },
      }
    }
  }
};

export {
  createPlanBody,
  createPlanResponse,
  getPlanResponse,
  connectPlanResponse
}