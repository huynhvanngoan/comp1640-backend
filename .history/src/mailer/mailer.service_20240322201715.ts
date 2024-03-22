import { Injectable } from '@nestjs/common';
import  nodemailer from 'nodem'
@Injectable()
export class MailerService {
  
  mailTransport() {
    const transporter = nodemailer
  }
}
