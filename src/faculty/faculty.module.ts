import { Module } from '@nestjs/common';
import { Faculty } from './entity/faculty.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyController } from './faculty.controller';
import { FacultyService } from './faculty.service';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Faculty, User]),],
    controllers: [FacultyController],
    providers: [FacultyService, UserService],
})
export class FacultyModule { }