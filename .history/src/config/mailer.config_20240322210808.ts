import { MailerOptions } from "@nestjs-modules/mailer";


export const mailerConfig: MailerOptions = {
    transport: {
        host: 'stmp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user:
        }
    }
}