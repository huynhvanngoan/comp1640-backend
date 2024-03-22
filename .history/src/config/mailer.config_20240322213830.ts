import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export const mailerConfig: MailerOptions = {
    transport: {
        host: 'stmp.gmail.com',
        port: 587,
        secure: false,
        auth: {
        user: 'Ngoanhvgcc200153@fpt.edu.vn',
        pass: 'tejlsgdstffavqsx',
        },
    },
    defaults: {
        from: 'Ngoanhvgcc200153@fpt.edu.vn',
    },
    preview: true,
    template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(),
        options: {
        strict: true,
        },
    },
};
