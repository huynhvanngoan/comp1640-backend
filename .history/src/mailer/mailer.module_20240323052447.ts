import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    Mail
  ]
  providers: [MailerService]
})
export class MailerModule {}
