export default class HttpError extends Error {
  statusCode: number;
  messages: object;

  constructor(props: { statusCode: number, messageType: string, messages?: object }) {
    super()
    const {statusCode, messageType, messages} = props;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }
    this.statusCode = statusCode;
    this.message = messageType;
    this.messages = messages
    this.name = 'Http error';
  }
}