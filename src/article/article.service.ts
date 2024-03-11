import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './schema/article.schema';
import { CreateArticleDto } from './dto/article.dto';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private readonly articleModel: Model<Article>) { }

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(createArticleDto);
        return createdArticle.save();
    }

    async findAll(): Promise<Article[]> {
        return this.articleModel.find().exec();
    }

    async findOne(id: string): Promise<Article> {
        return this.articleModel.findById(id).exec();
    }

    async update(id: string, updateArticleDto: CreateArticleDto): Promise<Article> {
        return this.articleModel.findByIdAndUpdate(id, updateArticleDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Article> {
        return this.articleModel.findByIdAndDelete(id).exec();
    }
}
