import { Injectable } from '@nestjs/common';
import { Faculty } from './entity/faculty.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/faculty.dto';

@Injectable()
export class FacultyService {
    constructor(
        @InjectRepository(Faculty)
        private readonly facultyRepository: Repository<Faculty>,
    ) { }

    async createFaculty(createFacultyDto: CreateFacultyDto): Promise<Faculty> {
        return this.facultyRepository.save(createFacultyDto)
    }

}
