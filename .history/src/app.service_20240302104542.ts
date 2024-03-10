import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private read)
  getHello(): string {
    return 'Hello World!';
  }
  sendMail() : void {
    this.mailerService.sendMail({

    })
  }
}
