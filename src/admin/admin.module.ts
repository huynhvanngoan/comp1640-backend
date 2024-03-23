import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { FacultyService } from 'src/faculty/faculty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Faculty } from 'src/faculty/entity/faculty.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from 'src/user/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Faculty])
  ],
  controllers: [AdminController],
  providers: [AdminService, UserService, FacultyService, AuthService],
})
export class AdminModule { }
