import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerController } from './mailer.controller';

@Module({
  imports: [Co]
  controllers: [MailerController],
  providers: [MailerService],
})
export class MailerModule {}
