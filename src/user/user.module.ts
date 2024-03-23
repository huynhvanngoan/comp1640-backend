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

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Comment, Article, Faculty]),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [UserService, AuthService, FacultyService],
  controllers: [UserController],
})
export class UserModule { }
