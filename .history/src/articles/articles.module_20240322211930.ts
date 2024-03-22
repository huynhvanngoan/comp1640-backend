import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { Academicyear } from 'src/academic-year/entities/academic-year.entity';
import { AcademicYearService } from 'src/academic-year/academic-year.service';
import { UploadService } from './upload.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from 'src/config/mailer.config';

@Module({
  imports: [TypeOrmModule.forFeature([Article, User, Academicyear]),
  MailerModule.forRoot(mailerConfig)
],
  controllers: [ArticlesController],
  providers: [ArticlesService, UserService, AcademicYearService, UploadService]
})
export class ArticlesModule { }
