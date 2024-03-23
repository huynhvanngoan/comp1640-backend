// comments.service.ts
import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class CommentsService {
  static articleId: number;
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) { }


  findAllByArticleId(articleId: number): Promise<Comment[]> {
    return this.commentRepository.find({ where: { articleId } });
  }

  async create(createCommentDto: CreateCommentDto, currentUser: User, articleId: number): Promise<Comment> {
    const comments = this.commentRepository.create({
      article: {
        id: articleId,
      },
      content: createCommentDto.content,
      user: {
        id: currentUser.id
      },
    });
    comments.user = currentUser;
    return this.commentRepository.save(comments);
  }

  async delete(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }


}
