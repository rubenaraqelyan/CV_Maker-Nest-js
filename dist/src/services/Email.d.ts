export default class Email {
    static send(email: string | string[], subject: string, html: string, attachments?: {
        path: string;
    }[]): Promise<any>;
}
