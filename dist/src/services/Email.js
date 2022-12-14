"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const nodemailer = require("nodemailer");
const common_1 = require("@nestjs/common");
const { MAIL_FROM, MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;
const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
    },
});
class Email {
    static async send(email, subject, html, attachments = [{ path: '' }]) {
        try {
            const to = _.isArray(email) ? email.join(', ') : email;
            const data = {
                from: MAIL_FROM,
                to,
                subject,
                html,
                attachments
            };
            if (!attachments[0].path)
                delete data.attachments;
            return transporter.sendMail(data);
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
exports.default = Email;
//# sourceMappingURL=Email.js.map