import { Controller } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail() {
    const sendEmailDto: SendEmailDto = {
      from: {
        name: 'COMP1640',
        address
      }
    }
    return await this.mailerService.sendEmail();
  }
}