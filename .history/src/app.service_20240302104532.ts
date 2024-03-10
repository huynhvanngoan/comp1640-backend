import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  cp
  getHello(): string {
    return 'Hello World!';
  }
  sendMail() : void {
    this.mailerService.sendMail({

    })
  }
}
