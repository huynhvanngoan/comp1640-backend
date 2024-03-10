import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService){} 
  getHello(): string {
    return 'Hello World!';
  }
  sendMail() : void {
    this.mailerService.sendMail({

    })
  }
}
