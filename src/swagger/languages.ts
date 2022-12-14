import {response} from "./main";

const createLanguageBody = {
  schema: {
    properties: {
      language: {
        type: "string"
      } ,
      level: {
        type: "string"
      }
    }
  }
};

const createLanguageResponse = {
  description: "Create language",
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
          language: {
            type: "string"
          },
          level: {
            type: "string"
          }
        },
      }
    }
  }
};

const getLanguageResponse = {
  description: "Get languages",
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
            user_id: {
              type: "string"
            },
            language: {
              type: "string"
            },
            level: {
              type: "string"
            }
          },
        }
      }
    }
  }
};

export {
  createLanguageBody,
  createLanguageResponse,
  getLanguageResponse
}