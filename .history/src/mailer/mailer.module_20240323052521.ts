import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    MailerModule.f
  ],
  providers: [MailerService]
})
export class MailerModule {}
