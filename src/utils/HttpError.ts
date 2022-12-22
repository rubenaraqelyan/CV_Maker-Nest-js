export default class HttpError extends Error {
  statusCode: number;
  messages: object;

  constructor(props: { statusCode: number, message: string, messages?: object }) {
    super()
    const {statusCode, message, messages} = props;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }
    this.statusCode = statusCode;
    this.message = message;
    this.messages = messages
    this.name = 'Http error';
  }
}