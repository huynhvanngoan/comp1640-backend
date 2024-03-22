import { Controller } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(
    const sendEmailDto: Send
  ) {
    return await this.mailerService.sendEmail()
  }
}
