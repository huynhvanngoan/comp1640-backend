import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { ArticlesService } from 'src/articles/articles.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { CurrentUser } from 'src/user/decorators/currentUser.decorator';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateArticleDto } from 'src/articles/dto/ceate-article.dto';


@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private articleService: ArticlesService,

    
    ) {}

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() createArticleDto: CreateArticleDto, @CurrentUser() currentUser: User): Promise<Article> {
        const article = await this.articlesService.create(createArticleDto, currentUser);
        return article;
    }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
