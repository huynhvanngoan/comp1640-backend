import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @Length(4, 40)
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
