import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';

@Module({
  imports:  [
    MailerModule.forRootAsync({
    useFactory: async () => ({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'ngoanhvgcc200153@fpt.edu.vn',
          pass: 'tbdidjeagqsmoclo',
        },
      },
      defaults: {
        from: 'ngoanhvgcc200153@fpt.edu.vn'
      },
      template: {
        dir: join(__dirname, './/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        }
      }
    }),
  }),
],
  providers: [MailService],
  controllers: [MailController]
})
export class MailModule {}
