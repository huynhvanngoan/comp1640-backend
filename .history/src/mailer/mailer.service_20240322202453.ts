import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Injectable()
export class MailerService {
  cons
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D',
      },
    });
    return transporter;
  }
}
