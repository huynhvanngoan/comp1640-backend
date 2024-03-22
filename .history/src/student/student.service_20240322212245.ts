import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class StudentService {
   constructor(private readonly mailerService: MailerService) {}

   async sendEmail(receiverEmail: string, subject: string, content: string) {
    try
   }
}
