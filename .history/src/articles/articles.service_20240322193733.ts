import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/ceate-article.dto';
import { User } from 'src/user/entities/user.entity';
import { UploadService } from './upload.service';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    private readonly uploadService: UploadService,
  ) {}

  async create(@Req() req: any, @UploadedFile() file: Express.Multer.FilecreateArticleDto: CreateArticleDto, currentUser: User): Promise<Article> {
      const article = this.articleRepository.create(createArticleDto);
      article.user = currentUser;
      if (createArticleDto.image) {
        const imagePath = await this.uploadService.uploadImage(createArticleDto.image);
        article.image = imagePath;
      }
  
      // Xử lý upload tài liệu
      if (createArticleDto.file) {
        const documentPath = await this.uploadService.uploadDocument(createArticleDto.file);
        article.file = documentPath;
      }
  
      await this.articleRepository.save(article);
      return article;
  }

  async acceptArticle(id: number): Promise<Article> {
    const article = await this.articleRepository.findOneBy({ id });
    if (!article) {
      throw new Error('Article not found');
    }
    article.status = 'accepted';
    return this.articleRepository.save(article);
  }

  async findByStatus(status: string): Promise<Article[]> {
    return this.articleRepository.find({
      where: {
        status: status,
      },
    });
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async findOne(id: number): Promise<Article> {
    return this.articleRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateArticleDto: CreateArticleDto,
  ): Promise<Article> {
    const article = await this.articleRepository.findOneBy({ id });
    if (!article) {
      throw new Error('Article not found');
    }
    const updatedArticle = this.articleRepository.merge(
      article,
      updateArticleDto,
    );
    return this.articleRepository.save(updatedArticle);
  }

  async remove(id: number): Promise<void> {
    await this.articleRepository.delete(id);
  }
}
