import {response} from "./main";

const createAddressBody = {
  schema: {
    properties: {
      address: {
        type: "string"
      },
      city: {
        type: "string"
      },
      country: {
        type: "string"
      },
      zip: {
        type: "string"
      }
    }
  }
};

const createAddressResponse = {
  description: "Create address",
  schema: {
    properties: {
      ...response,
      data: {
        type: "object",
        properties: {
          id: {
            type: "string"
          },
          user_id: {
            type: "string"
          },
          address: {
            type: "string"
          },
          city: {
            type: "string"
          },
          country: {
            type: "string"
          },
          zip: {
            type: "string"
          }
        },
      }
    }
  }
};

export {
  createAddressBody,
  createAddressResponse,
}