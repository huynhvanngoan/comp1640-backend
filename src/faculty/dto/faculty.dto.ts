import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateFacultyDto {
    @IsNotEmpty()
    @Length(4, 40)
    name: string;

    @IsNotEmpty()
    @IsString()
    des: string;
}
