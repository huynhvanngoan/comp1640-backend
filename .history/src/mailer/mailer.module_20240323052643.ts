import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import moduleName from '{module}'

@Module({
  imports: [
    MailerModule.forRootAsync
  ],
  providers: [MailerService]
})
export class MailerModule {}
