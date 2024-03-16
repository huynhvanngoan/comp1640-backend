import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Author } from '../schemas/article.schema';
import { ArticleStatus } from 'src/enum/status.enum';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  file: string;

  @IsOptional()
  @IsEnum(ArticleStatus)
  status:  ArticleStatus = ArticleStatus.Pending;

  @IsOptional()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsEnum(Author)
  author: Author;
}
