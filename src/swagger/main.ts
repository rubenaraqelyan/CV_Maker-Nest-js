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

export {
  response,
  xAuthorization
}