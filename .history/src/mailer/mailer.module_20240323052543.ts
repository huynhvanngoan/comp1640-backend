import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    MailerModule.for
  ],
  providers: [MailerService]
})
export class MailerModule {}
