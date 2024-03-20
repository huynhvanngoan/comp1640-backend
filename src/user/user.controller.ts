import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';

@Controller('/api/v1/users')
@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(LoggingInterceptor)
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllUser() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUserById(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.userService.findById(id);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe)
    id: number,
    @Body()
    requestBody: UpdateUserDto,
  ) {
    return this.userService.updateById(id, requestBody);
  }

  @Delete(':id')
  deleteUser(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.userService.deleteById(id);
  }

  @Post('register')
  registerUser(
    @Body()
    requestBody: RegisterUserDto,
  ) {
    return this.authService.register(requestBody);
  }

  @Post('login')
  loginUser(
    @Body()
    requestBody: LoginUserDto,
  ) {
    return this.authService.login(requestBody);
  }

  @Get('current-user')
  getCurrentUser(
    @Request() req,
  ) {
    return this.authService.getCurrentUser(req);
  }
}
