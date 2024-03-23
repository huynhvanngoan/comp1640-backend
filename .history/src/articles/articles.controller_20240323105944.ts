

import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/ceate-article.dto';
import { Article } from './entities/article.entity';
import { Body, Controller, Post, Get, Param, Put, Delete, UseGuards, Req } from '@nestjs/common';
import { CurrentUser } from 'src/user/decorators/currentUser.decorator';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/comments/entities/comment.entity';


@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService, private readonly commentsService: CommentsService
    ) { }

    @Put(':id/accept')
    async acceptArticle(@Param('id') id: number): Promise<Article> {
        return this.articlesService.acceptArticle(id);
    }

    @Get('status/:status')
    async findByStatus(@Param('status') status: string): Promise<Article[]> {
        return this.articlesService.findByStatus(status);
    }

    @Post(':id/comment')
    @UseGuards(AuthGuard)
    async createComment(@CurrentUser() currentUser: User, @Req() req, @Param('id') articleId: number): Promise<Comment> {
        const createCommentDto: CreateCommentDto = req.body;
        const comment = await this.commentsService.create(createCommentDto, currentUser, +articleId);
        return comment;
    }

    @Get()
    findAll(): Promise<Article[]> {
        return this.articlesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Article> {
        return this.articlesService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: CreateArticleDto): Promise<Article> {
        return this.articlesService.update(+id, updateArticleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.articlesService.remove(+id);
    }

    @Post


}
