import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  co
  getHello(): string {
    return 'Hello World!';
  }
  sendMail() : void {
    this.mailerService.sendMail({

    })
  }
}
