import { Module } from '@nestjs/common';
import { MailerService } from './mail.service';
import {  } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRootAsync({

    })
  ],
  providers: [MailerService],
})
export class MaileModule {}
