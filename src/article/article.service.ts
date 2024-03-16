import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './schemas/article.schema';
import { Model } from 'mongoose';
import { Query } from 'express-serve-static-core';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<Article>,
  ) {}

  async findAll(query: Query): Promise<Article[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;

    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const articles = await this.articleModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
    return articles;
  }

  async create(article: Article): Promise<Article> {
    const res = await this.articleModel.create(article);
    return res;
  }

  async findById(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id);

    if (!article) {
      throw new NotFoundException('Article not found.');
    }
    return article;
  }

  async updateById(id: string, article: Article): Promise<Article> {
    return await this.articleModel.findByIdAndUpdate(id, article, {
      new: true,
      runValidator: true,
    });
  }

  async deleteById(id: string): Promise<Article> {
    return await this.articleModel.findByIdAndDelete(id);
  }
}
