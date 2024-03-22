import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ArticlesService } from 'src/articles/articles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, A])
  ],
  controllers: [StudentController],
  providers: [StudentService, UserService, ArticlesService],
})
export class StudentModule {}
