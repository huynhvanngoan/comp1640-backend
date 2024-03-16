import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  async login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtGuard)
  @Get('user/:id')
  async getUserProfile(
    @Param('id')
    id: string,
  ) {
    return await this.authService.findById(id);
  }

  @Post('refresh')
  async refreshToken() {
    
  }
}
