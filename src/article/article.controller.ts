import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/article.dto';
import { Article } from './schema/article.schema';

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) { }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
        return this.articleService.create(createArticleDto);
    }

    @Get()
    async findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Article> {
        return this.articleService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateArticleDto: CreateArticleDto): Promise<Article> {
        return this.articleService.update(id, updateArticleDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Article> {
        return this.articleService.remove(id);
    }
}
