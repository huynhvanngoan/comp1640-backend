import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { Roles } from 'src/enums/roles.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password: string;

  role: Roles;
}
