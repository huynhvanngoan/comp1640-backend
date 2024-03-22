import { Controller } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(
    const sendEmailDto: SendEmailDto
  ) {
    return await this.mailerService.sendEmail()
  }
}
