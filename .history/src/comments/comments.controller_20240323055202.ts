// comments.controller.ts
import { Controller, Post, Get, Body, Param, UseGuards, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from 'src/user/decorators/currentUser.decorator';
import { User } from 'src/user/entities/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  // @Post(':articleId')
  // @UseGuards(AuthGuard)
  // async create(@Body() createCommentDto: CreateCommentDto, @CurrentUser() currentUser: User): Promise<Comment> {



  //   return this.commentsService.create(createCommentDto, currentUser,);
  // }



  @Get(':id')
  async findAllByArticle(@Param('id') articleId: number): Promise<Comment[]> {
    return this.commentsService.findAllByArticleId(articleId);
  }

  @Delete(':id')
  delete(@Param('id') articleId: number) {
    return this.commentsService.delete(articleId);
  }
}
