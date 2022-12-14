import {response} from "./main";

const createSkillBody = {
  schema: {
    properties: {
      skill: {
        type: "string"
      }
    }
  }
};

const createSkillResponse = {
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
          skill: {
            type: "string"
          }
        },
      }
    }
  }
};

const getSkillResponse = {
  description: "Get address",
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
            skill: {
              type: "string"
            }
          },
        }
      }
    }
  }
};

export {
  createSkillBody,
  createSkillResponse,
  getSkillResponse,
}