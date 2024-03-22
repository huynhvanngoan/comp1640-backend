import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { ArticlesService } from 'src/articles/articles.service';


@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private articleService: ArticlesService,
    @In
    
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
