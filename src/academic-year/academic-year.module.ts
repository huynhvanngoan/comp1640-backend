import { Module } from '@nestjs/common';
import { AcademicYearService } from './academic-year.service';
import { AcademicYearController } from './academic-year.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Academicyear } from './entities/academic-year.entity';
import { Article } from 'src/articles/entities/article.entity';
import { ArticlesService } from 'src/articles/articles.service';
import { UploadService } from 'src/articles/upload.service';
import { MailService } from 'src/mail/mail.service';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Academicyear, Article, User]),],
  controllers: [AcademicYearController],
  providers: [AcademicYearService, ArticlesService, UploadService, MailService, UserService],
})
export class AcademicYearModule { }
