import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

import { dataSourceOptions } from 'db/data-source';

import { User } from './user/entities/user.entity';

import { ArticlesModule } from './articles/articles.module';
import { AcademicYearModule } from './academic-year/academic-year.module';

import { Article } from './articles/entities/article.entity';
import { Academicyear } from './academic-year/entities/academic-year.entity';
import { StudentModule } from './student/student.module';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/entities/comment.entity';
import { AdminModule } from './admin/admin.module';




@Module({
  imports: [

    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User, Article, Academicyear, Comment]),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    ArticlesModule,
    AcademicYearModule,
    StudentModule,
    CommentsModule,
    AdminModule,
    MailModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
