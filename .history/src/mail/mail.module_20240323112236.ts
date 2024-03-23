import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  imports:  [MailerModule.forRootAsync({
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
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        }
      }
    }),
  }),]
  providers: [MailService]
})
export class MailModule {}
