import { Body, Controller, Post, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/ceate-article.dto';
import { Article } from './entities/article.entity';
import { CurrentUser } from 'src/user/decorators/currentUser.decorator';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Post()
    @UseGuards(AuthGuard)
    create(@Body() createArticleDto: CreateArticleDto, @CurrentUser() currentUser: User): Promise<Article> {
        return this.articlesService.create(createArticleDto, currentUser);
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
