import {
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Author } from '../schemas/article.schema';
import { ArticleStatus } from 'src/enum/status.enum';

export class UpdateArticleDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  file?: string;

  @IsOptional()
  @IsEnum(ArticleStatus)
  status:  ArticleStatus = ArticleStatus.Pending;

  @IsOptional()
  @IsDate()
  date?: Date;

  @IsOptional()
  @IsEnum(Author)
  author: Author;
}
