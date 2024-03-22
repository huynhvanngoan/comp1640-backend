import { Controller } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail() {
    const sendEmailDto: SendEmailDto = {
      from: {
        name: 'COMP1640',
        address: 'comp1640@gmail.com',
        recipients: [{ 
          name: 'COMP1640' ,
          address: 'comp1641@gmail.com'
        }],
        subject: 'COMP1640',
        html:'<p>Hi, your lucky number 22 w</p>'
      },
    };
    return await this.mailerService.sendEmail();
  }
}