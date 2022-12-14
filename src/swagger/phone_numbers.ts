import { response } from './main';

const createPhoneNumberBody = {
  schema: {
    properties: {
      code: {
        type: 'string',
      },
      phone_number: {
        type: 'string',
      },
    },
  },
};

const createPhoneNumberResponse = {
  description: 'Create Phone number',
  schema: {
    properties: {
      ...response,
      data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          code: {
            type: 'string',
          },
          phone_number: {
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

export { createPhoneNumberBody, createPhoneNumberResponse };
