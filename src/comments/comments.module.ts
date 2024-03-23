import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Comment } from './entities/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { FacultyService } from 'src/faculty/faculty.service';
import { Faculty } from 'src/faculty/entity/faculty.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment, User, Faculty]),],
  controllers: [CommentsController],
  providers: [CommentsService, UserService, FacultyService],
})
export class CommentsModule { }
