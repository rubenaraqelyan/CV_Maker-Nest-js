import { response } from './main';

const createCvResponse = {
  description: 'Create User Cv response',
  schema: {
    properties: {
      ...response,
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          user_id: {
            type: 'string',
          },
        },
      },
    },
  },
};

const getCvResponse = {
    description: "Get CV response",
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
          },
        }
      }
    }
}

export { createCvResponse, getCvResponse };
