import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    MailerModule.forRoot
  ],
  providers: [MailerService]
})
export class MailerModule {}
