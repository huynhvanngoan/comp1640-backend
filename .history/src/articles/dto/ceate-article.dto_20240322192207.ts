import { IsDateString, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @Length(4, 40)
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsFile()
  image: Express.Multer.File;

  @IsNotEmpty()
  @IsFile()
  file: Express.Multer.File;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;
}
