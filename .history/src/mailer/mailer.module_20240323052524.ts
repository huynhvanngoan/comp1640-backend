import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    MailerMod
  ],
  providers: [MailerService]
})
export class MailerModule {}
