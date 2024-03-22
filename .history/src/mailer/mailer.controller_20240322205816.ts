import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './dto/send-mail.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send-email')
  async sendMail() {
    const sendEmailDto: SendEmailDto = {
      from: {
        name: 'Lucy',
        address: 'lucy@gmail.com',
      },
        recipients: [
          {
            name: 'Huynh Van Ngoan',
            address: 'huynhngoan389@@gmail.com',
          },
        ],
        subject: 'Lucky Day',
        html: '<p><strong>Hi John,</strong> your lucky days</p>',
      
    };
    return await this.mailerService.sendEmail(sendEmailDto);
  }
}
