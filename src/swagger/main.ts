const response = {
  status: {
    type: "string"
  }
,
  message: {
    type: "string"
  }
}
const xAuthorization = {
  name: 'x-authorization',
  description: 'Authorization',
  required: true
}

const emptyResponse = (description: string) => ({
  description: description,
  schema: {
    properties: {
      ...response,
    }
  }
});

export {
  response,
  emptyResponse,
  xAuthorization,
}