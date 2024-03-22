import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [StudentController],
  providers: [StudentService, UserService],
})
export class StudentModule {}
