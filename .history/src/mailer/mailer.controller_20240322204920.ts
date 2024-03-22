import { Controller } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail() {
    const sendEmailDto: SendEmailDto = {
      from: {
        name: 'Lucy',
        address: 'lucy@gmail.com',
        recipients: [{ 
          name: 'John Doe' ,
          address: 'johndoe@gmail.com'
        }],
        subject: 'Lucky Day',
        html:'<p><strong></strong> your lucky days</p>'
      },
    };
    return await this.mailerService.sendEmail();
  }
}
