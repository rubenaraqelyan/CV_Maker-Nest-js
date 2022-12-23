export default class HttpError extends Error {
  statusCode: number;
  messagesGroup: object;

  constructor(props: { statusCode: number, message: string, messagesGroup?: object }) {
    super()
    const {statusCode, message, messagesGroup} = props;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }
    this.statusCode = statusCode;
    this.message = message;
    this.messagesGroup = messagesGroup;
    this.name = 'Http error';
  }
}