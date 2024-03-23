// academic-year.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Academicyear } from './entities/academic-year.entity';


@Injectable()
export class AcademicYearService {
  constructor(
    @InjectRepository(Academicyear)
    private academicYearRepository: Repository<Academicyear>,
  ) { }

  async findAll(): Promise<Academicyear[]> {
    return await this.academicYearRepository.find();
  }

  async findOne(id: number): Promise<Academicyear> {
    return await this.academicYearRepository.findOneBy({ id });
  }

  async create(academicYearData: Academicyear): Promise<Academicyear> {
    const academicYear = new Academicyear();
    Object.assign(academicYear, academicYearData);
    return await this.academicYearRepository.save(academicYear);
  }

  async update(id: number, academicYearData: Academicyear): Promise<Academicyear> {
    const academicYear = await this.academicYearRepository.findOneBy({ id });
    if (!academicYear) {
      return null;
    }
    Object.assign(academicYear, academicYearData);
    return await this.academicYearRepository.save(academicYear);
  }

  async remove(id: number): Promise<void> {
    await this.academicYearRepository.delete(id);
  }
}
