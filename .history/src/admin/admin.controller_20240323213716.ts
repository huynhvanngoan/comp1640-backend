import { Controller, Get, Post, Body, Patch, Param, Delete,  Req, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { FacultyService } from 'src/faculty/faculty.service';
import { CreateFacultyDto } from 'src/faculty/dto/faculty.dto';
import { Faculty } from 'src/faculty/entity/faculty.entity';
import { RegisterUserDto } from 'src/user/dtos/register-user.dto';
import { AuthService } from 'src/user/auth.service';
import { RoleGuard } from 'src/guards/role.guard';

@UseGuards(new RoleGuard(['']))
@Controller('api/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService,
    private readonly facultyService: FacultyService,
    private readonly authService: AuthService,
  ) { }


  @Post('create-user')
  registerUser(@Req() req, facultyId: number) {
    const requestBody: RegisterUserDto = req.body;
    facultyId = requestBody['facultyId'];
    return this.authService.register(requestBody, facultyId);
  }

  @Post('/faculty')
  createFaculty(@Body() createFacultyDto: CreateFacultyDto): Promise<Faculty> {
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
