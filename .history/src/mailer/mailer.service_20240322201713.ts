import { Injectable } from '@nestjs/common';
import  nodemailer from 'node'
@Injectable()
export class MailerService {
  
  mailTransport() {
    const transporter = nodemailer
  }
}
