import { Controller } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './dto/send-mail.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail() {
    const sendEmailDto: SendEmailDto = {
      from: {
        name: 'Lucy',
        address: 'lucy@gmail.com',
      },
        recipients: [
          {
            name: 'John Doe',
            address: 'johndoe@gmail.com',
          },
        ],
        subject: 'Lucky Day',
        html: '<p><strong>Hi John,</strong> your lucky days</p>',
      
    };
    return await this.mailerService.sendEmail(sendEmailDto);
  }
}
