import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { Academicyear } from 'src/academic-year/entities/academic-year.entity';
import { AcademicYearService } from 'src/academic-year/academic-year.service';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentsService } from 'src/comments/comments.service';
import { UploadService } from './upload.service';
import { MailService } from 'src/mail/mail.service';
import { FacultyService } from 'src/faculty/faculty.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Article, User, Academicyear, Comment]),
    F
    Comment
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, UserService, AcademicYearService, UploadService, CommentsService, MailService, FacultyService],

})
export class ArticlesModule { }
