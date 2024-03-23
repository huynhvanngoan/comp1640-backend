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
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article, User, Academicyear, Comm]),
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp.gmail.com',
          auth: {
            user: 'ngoanhvgcc200153@fpt.edu.vn',
            pass: 'slwjipytxljhydzn',
          },
        },
        defaults: {
          from: 'ngoanhvgcc200153@fpt.edu.vn'
        },
        template: {
          dir: join(__dirname, './templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          }
        }
      }),
    }),
    Comment
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, UserService, AcademicYearService, UploadService, CommentsService],

})
export class ArticlesModule {}
