
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query} from '@nestjs/common';

import { AdminService } from './admin.service';
import { FacultyService } from 'src/faculty/faculty.service';
import { CreateFacultyDto } from 'src/faculty/dto/faculty.dto';
import { Faculty } from 'src/faculty/entity/faculty.entity';
import { RegisterUserDto } from 'src/user/dtos/register-user.dto';
import { AuthService } from 'src/user/auth.service';

@Controller('api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService,
    private readonly facultyService: FacultyService,
    private readonly authService: AuthService,) { }


  @Post('create-user')
  registerUser(@Body() requestBody: RegisterUserDto, @Req() req, @Query('facultyId'),facultyId: number ) {
    return this.authService.register(requestBody);
  }

  @Post('/faculty')
  createFaculty(@Body() createFacultyDto: CreateFacultyDto): Promise<Faculty> {
    console.log(createFacultyDto);
    return this.facultyService.createFaculty(createFacultyDto);
  }


  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string) {
    return this.adminService.update(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
  //   return this.adminService.update(+id, updateAdminDto);
  // }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
