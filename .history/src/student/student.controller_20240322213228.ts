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
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(
    private articlesService: ArticlesService,
    private studentService: StudentService,
  ) {}

  @Post('create-article')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'file', maxCount: 1 },
    ]),
  )
  async create(
    @UploadedFiles()
    files: { image?: Express.Multer.File[]; file?: Express.Multer.File[] },
    @Body() createArticleDto: CreateArticleDto,
    @CurrentUser() currentUser: User,
  ): Promise<Article> {
    const article = await this.articlesService.create(
      createArticleDto,
      files.image?.[0],
      files.file?.[0],
      currentUser,
    );
    return article;
  }

  @Post('send-email')
  async sendEmail(
    @Body() emailData: { to: string; subject: string; content: string },
  ) {
    const { to, subject, content } = emailData;
    const emailClient = await this.studentService.sendEmail(
      to,
      subject,
      content,
    );

    if (emailClient) {
      return { message: 'Email sent successfully' };
    } else {
      return 
    }
  }
}
