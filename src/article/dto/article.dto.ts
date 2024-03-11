import { IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateArticleDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsOptional()
    @IsString()
    image?: string; // optional field for image URL

    @IsOptional()
    @IsString()
    file?: string; // optional field for file URL

    @IsOptional()
    @IsString()
    status?: string; // optional field for status, you can define validation rules as needed

    @IsOptional()
    @IsDate()
    date?: Date; // optional field for date

    @IsNotEmpty()
    @IsString()
    author: string; // assuming author is a string representing user ID
}
