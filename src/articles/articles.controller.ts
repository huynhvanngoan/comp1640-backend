import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/ceate-article.dto';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Post()
    create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
        return this.articlesService.create(createArticleDto);
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
}
