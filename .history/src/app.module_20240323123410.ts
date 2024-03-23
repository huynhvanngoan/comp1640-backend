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

import { FacultyService } from './faculty/faculty.service';
import { FacultyModule } from './faculty/faculty.module';
import { Faculty } from './faculty/entity/faculty.entity';





@Module({
  imports: [

    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User, Article, Academicyear, Comment, Faculty]),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    ArticlesModule,
    AcademicYearModule,
    StudentModule,
    CommentsModule,
    AdminModule,
    FacultyModule

>>>>>>> 2cc48856f668a71e5b5d205d93178402058842fa
  ],
  controllers: [AppController],
  providers: [AppService, FacultyService],
})
export class AppModule { }
