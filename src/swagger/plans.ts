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
      price_id: {
        type: "string",
        require: "false"
      }
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
            required: "false"
          },
          price: {
            type: "number"
          },
          price_id: {
            type: "string",
            required: "false"
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
              required: "false"
            },
            price: {
              type: "number"
            },
            price_id: {
              type: "string",
              required: "false"
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