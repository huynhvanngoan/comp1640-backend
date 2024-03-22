import { Injectable } from '@nestjs/common';


@Injectable()
export class StudentService {
   constructor(private readonly mailer)
}
