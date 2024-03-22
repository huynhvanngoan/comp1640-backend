import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp.gmail.com',
          auth: {
            user: 'ngoanhvgcc200153@fpt.edu.vn',
            pass: 'slwjipytxljhydzn',
          },
        },
        defaults: {
          from: 'ngoanhvgcc200153@fpt.edu.vn'
        },
        template: {
          dir: join(__dirname, './templates'),
          adapter: new Handlebars
        }
      }),
    }),
  ],
  providers: [MailService],
})
export class MailModule {}
