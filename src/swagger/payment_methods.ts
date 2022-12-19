import { response } from './main';

const createPaymentMethodBody = {
  schema: {
    properties: {
      type: {
        type: 'string',
      },
      card_number: {
        type: 'number',
      },
      exp_month: {
        type: 'number',
      },
      exp_year: {
        type: 'number',
      },
      cvc: {
        type: 'number',
      },
    },
  },
};

const createPaymentMethodResponse = {
  description: 'Create Payment method response',
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
          pm_id: {
            type: 'string',
          },
          exp_month: {
            type: 'number',
          },
          exp_year: {
            type: 'number',
          },
        },
      },
    },
  },
};

const getPaymentMethodResponse = {
  description: 'Create Payment method response',
  schema: {
    properties: {
      ...response,
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            user_id: {
              type: 'string',
            },
            pm_id: {
              type: 'string',
            },
            exp_month: {
              type: 'number',
            },
            exp_year: {
              type: 'number',
            },
          },
        },
      },
    },
  },
};

export {
  createPaymentMethodBody,
  createPaymentMethodResponse,
  getPaymentMethodResponse,
};
