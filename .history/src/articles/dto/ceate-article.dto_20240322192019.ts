import { IsDateString,  IsNotEmpty, IsString, Length, MinLength } from 'class-validator';

export class CreateArticleDto {
    @IsNotEmpty()
    @Length(4, 40)
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    file: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsDateString()
    date: Date;




}
