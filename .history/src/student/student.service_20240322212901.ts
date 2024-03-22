import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class StudentService {
   constructor(private readonly mailerService: MailerService) {}

   async sendEmail(receiverEmail: string, subject: string, content: string) {
    try {
      await this.mailerService.sendMail({
        to: receiverEmail,
        subject: subject,
        html: content,
      });
      return true;
    } catch (error) {
      console.error('Error sending email: ', error);
      return false;
    }
   }
}