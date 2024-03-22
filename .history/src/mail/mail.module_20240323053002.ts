import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import {  } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRootAsync({

    })
  ],
  providers: [MailerService],
})
export class MailModule {}
