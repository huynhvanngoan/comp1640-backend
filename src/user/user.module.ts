import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Faculty } from 'src/faculty/entity/faculty.entity';
import { FacultyService } from 'src/faculty/faculty.service';
import { ArticlesService } from 'src/articles/articles.service';
import { UploadService } from 'src/articles/upload.service';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Comment, Article, Faculty]),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [UserService, AuthService, FacultyService, ArticlesService, UploadService, MailService],
  controllers: [UserController],
})
export class UserModule { }
