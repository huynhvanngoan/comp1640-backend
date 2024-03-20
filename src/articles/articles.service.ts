import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/ceate-article.dto';
@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
    ) { }

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const article = this.articleRepository.create(createArticleDto);
        return this.articleRepository.save(article);
    }

    async findAll(): Promise<Article[]> {
        return this.articleRepository.find();
    }

    async findOne(id: number): Promise<Article> {
        return this.articleRepository.findOneBy({ id });
    }

    async update(id: number, updateArticleDto: CreateArticleDto): Promise<Article> {
        const article = await this.articleRepository.findOneBy({ id });
        if (!article) {
            throw new Error('Article not found');
        }
        const updatedArticle = this.articleRepository.merge(article, updateArticleDto);
        return this.articleRepository.save(updatedArticle);
    }

    async remove(id: number): Promise<void> {
        await this.articleRepository.delete(id);
    }
}
