import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/ceate-article.dto';
import { User } from 'src/user/entities/user.entity';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto, currentUser: User): Promise<Article> {
      const article = this.articleRepository.create(createArticleDto);
      article.user = currentUser;

      if (createArticleDto.image) {
        const image = createArticleDto.image;
        const imageDir = join(__dirname, '..', '..', 'uploads', 'images');

        if (!existsSync(imageDir)) {
          mkdirSync(imageDir, { recursive: true });
        }
      }
      const imageStream = createReadStream(image.path);
      const imageFileName = `${Date.now()}_${image.originalname}`;
      const imagePath = join(imageDir, imageFileName);
      const imageWriteStream = createWriteStream(imagePath);
      await new Promise<void>((resolve, reject) => {
        imageStream.pipe(imageWriteStream);
        imageStream.on('end', () => {
          resolve();
        });
        imageStream.on('error', (error) => {
          reject(error);
        });
      });

      // Assign the image path to the article entity
      article.image = imagePath;
    }

    // Handle file upload
    if (createArticleDto.file) {
      const file = createArticleDto.file;
      const fileDir = join(__dirname, '..', '..', 'uploads', 'files');

      // Ensure the directory exists, if not, create it
      if (!existsSync(fileDir)) {
        mkdirSync(fileDir, { recursive: true });
      }

      const fileStream = createReadStream(file.path);
      const fileFileName = `${Date.now()}_${file.originalname}`;
      const filePath = join(fileDir, fileFileName);
      const fileWriteStream = createWriteStream(filePath);
      await new Promise<void>((resolve, reject) => {
        fileStream.pipe(fileWriteStream);
        fileStream.on('end', () => {
          resolve();
        });
        fileStream.on('error', (error) => {
          reject(error);
        });
      });

      // Assign the file path to the article entity
      article.file = filePath;
    }

    // Save the article entity
    const savedArticle = await this.articleRepository.save(article);

    // Send email
    await this.sendEmail(currentUser.email, 'Article Created', 'Your article has been successfully created.');

    return savedArticle;
}

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    await this.mailerService.sendMail({
      to,
      subject,
      text,
    });
  

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
