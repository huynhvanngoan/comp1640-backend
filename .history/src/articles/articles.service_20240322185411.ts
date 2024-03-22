import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/ceate-article.dto';
import { User } from 'src/user/entities/user.entity';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import { promisify } from 'util';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto, currentUser: User): Promise<Article> {
      const article = this.articleRepository.create(createArticleDto);
      article.user = currentUser;
      await this.articleRepository.save(article)
      return article;
  }

  async uploadImage(file: any) : Promise<string> {
    const ext = extname(file.origianlname);
    const allowedExtArr = ['.jpg', '.png', '.jpeg'];
    if (!allowedExtArr.includes(ext)) {
      throw new Error(`Wrong extension type. Accepted file ext are: ${allowedExtArr.toString()}`);
    }
    const fileSize = parseInt(file.size);
    if (fileSize > 1024 * 1024 * 5) {
      throw new Error('File size is too large. Accepted file size is less than 5 MB');
    }
    const savedFileName = await this.saveFileToStorage('avatar', file);
    return savedFileName;
  }

  private async saveFileToStorage(storageName: string, file: Express.Multer.File): Promise<string> {
    try {
      const storageConfig = (name: string) => {
        return {
          destination: (req, file, cb) => {
            const uploadPath = `./uploads/${name}`;
            if (!existsSync(uploadPath)) {
              mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
          },
          filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            const ext = extname(file.originalname);
            cb(null, `${uuidv4()}-${uniqueSuffix}${ext}`);
          },
        };
      };
  
      const saveFile = multer(storageConfig(storageName)).single('file');
      const saveFileAsync = promisify(saveFile);
  
      await saveFileAsync(file);
  
      // Trả về tên file đã lưu
      return file.filename;
    } catch (error) {
      throw new BadRequestException('Failed to save file');
    }
  }async create(createArticleDto: CreateArticleDto, currentUser: User): Promise<Article> {
    const article = this.articleRepository.create(createArticleDto);
    article.user = currentUser;
    await this.articleRepository.save(article);
    return article;
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    try {
      const ext = extname(file.originalname);
      const allowedExtArr = ['.jpg', '.png', '.jpeg'];
      
      if (!allowedExtArr.includes(ext)) {
        throw new BadRequestException(`Wrong extension type. Accepted file extensions are: ${allowedExtArr.toString()}`);
      }
      
      const fileSize = file.size;
      
      if (fileSize > 1024 * 1024 * 5) {
        throw new BadRequestException('File size is too large. Accepted file size is less than 5 MB');
      }
      
      const savedFileName = await this.saveFileToStorage('avatar', file);
      return savedFileName;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  private async saveFileToStorage(storageName: string, file: Express.Multer.File): Promise<string> {
    try {
      const storageConfig = {
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = `./uploads/${storageName}`;
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const ext = extname(file.originalname);
          cb(null, `${uuidv4()}-${uniqueSuffix}${ext}`);
        },
      };
  
      const saveFile = promisify(diskStorage(storageConfig).single('file'));
      await saveFile(file);
  
      return file.filename;
    } catch (error) {
      throw new BadRequestException('Failed to save file');
    }
  }
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
