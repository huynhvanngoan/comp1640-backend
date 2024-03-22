import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/send-mail.dto';
import Mail from 'nodemailer/lib/mailer';
@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}

  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: Number(this.configService.get<string>('MAIL_PORT')),
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
    return transporter;
  }

  async sendEmail(sendEmailDto: SendEmailDto) {
    const { from, recipients, subject, html, placeholderReplacements } =
      sendEmailDto;

    const options: Mail.Options = {
      from: from ?? {
        address: this.configService.get<string>('APP_NAME'),
        name: this.configService.get<string>('DEFAULT_MAIL_FROM'),
      },
    };
    const transport = this.mailTransport();

    try {
      const result = await transport.sendMail();
    } catch (error) {}
  }
}
