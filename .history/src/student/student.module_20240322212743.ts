import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ArticlesService } from 'src/articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { UploadService } from 'src/articles/upload.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from 'src/config/mailer.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Article]),
    MailerModule.forRoot(mailerConfig),
  ],
  controllers: [StudentController],
  providers: [StudentService, UserService, ArticlesService, UploadService, Mailer],
})
export class StudentModule {}
