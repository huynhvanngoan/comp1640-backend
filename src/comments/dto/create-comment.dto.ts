import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
    [x: string]: any;

    @IsNotEmpty()
    @IsString()
    content: string;



}
