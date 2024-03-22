import { IsDateString,  IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateArticleDto {
    @IsNotEmpty()
    @Length(4, 40)
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    image: any;

    @IsNotEmpty()
    @IsString()
    file: any;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsDateString()
    date: Date;




}