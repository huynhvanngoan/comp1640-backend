// academic-year.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AcademicYearService } from './academic-year.service';
import { Academicyear } from './entities/academic-year.entity';

@Controller('academic-years')
export class AcademicYearController {
  constructor(private readonly academicYearService: AcademicYearService) { }

  @Get()
  async findAll(): Promise<Academicyear[]> {
    return this.academicYearService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Academicyear> {
    return this.academicYearService.findOne(+id);
  }

  @Post()
  async create(@Body() academicYearData: Academicyear): Promise<Academicyear> {
    return this.academicYearService.create(academicYearData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() academicYearData: Academicyear): Promise<Academicyear> {
    return this.academicYearService.update(+id, academicYearData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.academicYearService.remove(+id);
  }
}