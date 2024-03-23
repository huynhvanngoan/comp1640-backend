import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  sendMail(): void {
    this.mailerService.sendMail({
      to: 'huynhngoan389@gmail.com',
      from: 'Ngoanhvgcc200153@fpt.edu.vn',
      subject: 'Test Nest Mailer Module',
      template: 'upload-article',
      context: {
        username: "J"
      }
    });
  }
}
