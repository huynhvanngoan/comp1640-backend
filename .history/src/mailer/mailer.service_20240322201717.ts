import { Injectable } from '@nestjs/common';
import  nodemailer from 'nodemailer'
@Injectable()
export class MailerService {
  
  mailTransport() {
    const transporter = nodemailer
  }
}
