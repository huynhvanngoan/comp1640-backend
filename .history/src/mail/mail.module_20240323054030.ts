import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

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
          dir: join()
        }
      }),
    }),
  ],
  providers: [MailService],
})
export class MailModule {}
