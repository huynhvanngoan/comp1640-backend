import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  async getAllArticles(@Query() query: ExpressQuery): Promise<Article[]> {
    return this.articleService.findAll(query);
  }

  @Post()
  async createArticle(
    @Body()
    createArticleDto: CreateArticleDto,
  ): Promise<Article> {
    return this.articleService.create(createArticleDto);
  }

  @Get(':id')
  async getArticleById(
    @Param('id')
    id: string,
  ): Promise<Article> {
    return this.articleService.findById(id);
  }

  @Put(':id')
  async updateArticle(
    @Param('id')
    id: string,
    @Body()
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.updateById(id, updateArticleDto);
  }

  @Delete(':id')
  async deleteArticle(
    @Param('id')
    id: string,
  ): Promise<Article> {
    return this.articleService.deleteById(id);
  }
}
