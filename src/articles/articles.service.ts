import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/ceate-article.dto';
import { User } from 'src/user/entities/user.entity';
import { UploadService } from './upload.service';
import { MailService } from 'src/mail/mail.service';
import { UserService } from 'src/user/user.service';
@Injectable()
export class ArticlesService {
  static academicId: number;
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    private readonly uploadService: UploadService,
    private readonly mailService: MailService,
    private readonly userService: UserService,
  ) { }
  async create(
    createArticleDto: CreateArticleDto,
    image?: Express.Multer.File,
    file?: Express.Multer.File,
    currentUser?: User,
    academicId?: number
  ): Promise<Article> {
    const article = this.articleRepository.create({
      title: createArticleDto.title,
      content: createArticleDto.content,
      user: { id: currentUser.id },
      academic: { id: academicId }
    });

    if (image) {
      const imagePath = await this.uploadService.uploadImage(image);
      article.image = imagePath;
    }

    if (file) {
      const documentPath = await this.uploadService.uploadDocument(file);
      article.file = documentPath;
    }

    await this.articleRepository.save(article);

    await this.mailService.sendMail();
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

  async deniedArticle(id: number): Promise<Article> {
    const article = await this.articleRepository.findOneBy({ id });
    if (!article) {
      throw new Error('Article not found');
    }
    article.status = 'dynied';
    return this.articleRepository.save(article);
  }

  async findByStatus(status: string): Promise<Article[]> {
    return this.articleRepository.find({
      where: {
        status: status,
      },
    });
  }
  async findByAcademic(academicId: number): Promise<Article[]> {
    return this.articleRepository.find({
      where: {
        academic: {
          id: academicId
        },
      },
    });
  }

  async findAll(currentUser: User): Promise<Article[]> {
    const userWithRelation: User = await this.userService.findWithRelation(currentUser.id);
    console.log(userWithRelation);
    let faucultyID = userWithRelation?.facultys?.id;
    if (!faucultyID) {
      faucultyID = -1;
    }
    console.log(faucultyID, "faucultyID");
    return this.articleRepository.find({
      where: {
        user: {
          facultys: {
            id: faucultyID
          }
        }
      }
    });
  }

  async findAdllByUserId(userId: number): Promise<Article[]> {
    return this.articleRepository.find({
      where: {
        user: { id: userId },
      },
    });
  }

  async findAllArticle(): Promise<Article[]> {
    return await this.articleRepository.find();
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
