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
import { MailerModule } from './mailer/mailer.module';



@Module({
  imports: [
    ConfigModule.f
    TypeOrmModule.forFeature([User, Article, Academicyear]),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    ArticlesModule,
    AcademicYearModule,
    StudentModule,
    MailerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
