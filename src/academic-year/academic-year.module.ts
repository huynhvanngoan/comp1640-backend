import { Module } from '@nestjs/common';
import { AcademicYearService } from './academic-year.service';
import { AcademicYearController } from './academic-year.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Academicyear } from './entities/academic-year.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Academicyear]),],
  controllers: [AcademicYearController],
  providers: [AcademicYearService],
})
export class AcademicYearModule { }
