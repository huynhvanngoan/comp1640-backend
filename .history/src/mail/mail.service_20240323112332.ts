import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private mailerService: Mailer)
    async sendMail() {
        this.mailerService.sendMail({
          to: 'huynhngoan389@gmail.com',
          from: 'Ngoanhvgcc200153@fpt.edu.vn',
          subject: 'Test Nest Mailer Module',
          template: 'upload-article',
        });
      }
}
