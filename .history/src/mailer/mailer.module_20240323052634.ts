import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';imp

@Module({
  imports: [
    MailerModule.forRootAsync
  ],
  providers: [MailerService]
})
export class MailerModule {}
