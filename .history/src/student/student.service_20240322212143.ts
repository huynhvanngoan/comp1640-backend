import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class StudentService {
   constructor(private readonly mailerService: MailerService) {}

   async sendEmail(reci)
}