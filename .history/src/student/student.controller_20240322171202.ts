import { Controller, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { ArticlesService } from 'src/articles/articles.service';

import { User } from 'src/user/entities/user.entity';
import { CurrentUser } from 'src/user/decorators/currentUser.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateArticleDto } from 'src/articles/dto/ceate-article.dto';
import { Article } from 'src/articles/entities/article.entity';


@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private articlesService: ArticlesService,
    ) {}

    @Post('create-article')
    @UseGuards(AuthGuard)
    async create(@Body() createArticleDto: CreateArticleDto, @CurrentUser() currentUser: User): Promise<Article> {
        const article = await this.articlesService.create(createArticleDto, currentUser);
        return article;
    }




}
