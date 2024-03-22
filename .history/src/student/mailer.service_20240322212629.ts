import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(receiverEmail: string, subject: string, content: string) {
    try {
      await this.mailerService.sendM2002ail({
        to: receiverEmail,
        subject: subject,
        html: content,
      });
      return true;
    } catch (error) {}
  }
}
