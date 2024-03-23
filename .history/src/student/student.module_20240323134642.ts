import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ArticlesService } from 'src/articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { UploadService } from 'src/articles/upload.service';
import { MailService } from 'src/mail/mail.service';
import { FacultyService } from 'src/faculty/faculty.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Article]),
    MailModule
  ],
  controllers: [StudentController],
  providers: [StudentService, UserService, ArticlesService, UploadService, MailService, FacultyService],
})
export class StudentModule {}
