import {
  Controller,
  Post,
  Body,
  UseGuards,

  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ArticlesService } from 'src/articles/articles.service';

import { User } from 'src/user/entities/user.entity';
import { CurrentUser } from 'src/user/decorators/currentUser.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateArticleDto } from 'src/articles/dto/ceate-article.dto';
import { Article } from 'src/articles/entities/article.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('student')
export class StudentController {
  constructor(private articlesService: ArticlesService) {}

  @Post('create-article')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileInterceptor('image'),
    FileInterceptor('file'),
  )
  async create(
    @UploadedFiles()
    files: { image?: Express.Multer.File, file?: Express.Multer.File },
    @Body() createArticleDto: CreateArticleDto,
    @CurrentUser() currentUser: User,
  ): Promise<Article> {
    const article = await this.articlesService.create(
      createArticleDto,
      files.image,
      files.file,
      currentUser,
    );
    return article;
  }
}