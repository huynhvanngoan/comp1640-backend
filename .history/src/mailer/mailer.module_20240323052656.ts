import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import moduleName from '@nestjs-modules/mailer!'

@Module({
  imports: [
    MailerModule.forRootAsync
  ],
  providers: [MailerService]
})
export class MailerModule {}
