import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { ArticlesService } from 'src/articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { UploadService } from 'src/articles/upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Article])
  ],
  controllers: [StudentController],
  providers: [StudentService, UserService, ArticlesService, UploadService],
})
export class StudentModule {}
