import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  // Query,
  Param,
  ParseIntPipe,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
  Req,
  UploadedFile,
  BadRequestException,
  // Request,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { RegisterUserDto } from './dtos/register-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/Login.dto';
import { CurrentUser } from './decorators/currentUser.decorator';

import { RoleGuard } from 'src/guards/role.guard';
import { User } from './entities/user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'src/helpers/config.helper';
import { extname } from 'path';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  @UseGuards(new RoleGuard(['user', 'admin']))
  @UseGuards(AuthGuard)
  getAllUser() {
    return this.userService.findAll();
  }

  @Get('/current-user')
  @UseGuards(AuthGuard)
  getCurrentUser(@CurrentUser() currentUser: User) {
    return currentUser;
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  }

  @Put('/:id')
  @UseGuards(new RoleGuard(['user', 'admin', 'mod']))
  @UseGuards(AuthGuard)
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() requestBody: UpdateUserDto,
    @CurrentUser() currentUser: User,
  ) {
    return this.userService.updateById(id, requestBody, currentUser);
  }

  @Delete('/:id')
  @UseGuards(new RoleGuard(['user', 'admin', 'mod']))
  @UseGuards(AuthGuard)
  deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() currentUser: User,
  ) {
    return this.userService.deleteById(id, currentUser);
  }

  @Post('')
  registerUser(@Body() requestBody: RegisterUserDto) {
    return this.authService.register(requestBody);
  }

  @Post('/login')
  loginUser(@Body() requestBody: LoginUserDto) {
    return this.authService.login(requestBody);
  }

  @Post('upload-avatar')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: storageConfig('avatar'),
      fileFilter: (req, file, cb) => {
        const ext = extname(file.originalname);
        const allowedExtArr = ['.jpg', '.png', '.jpeg'];
        if (!allowedExtArr.includes(ext)) {
          req.fileValidationError = `Wrong extension type. Accepted file ext are: ${allowedExtArr.toString()}`;
          cb(null, false);
        } else {
          const fileSize = parseInt(req.headers['content-length']);
          if (fileSize > 1024 * 1024 * 5) {
            req.fileValidationError =
              'File size is too large. Accepted file size is less than 5 MB';
            cb(null, false);
          } else {
            cb(null, true);
          }
        }
      },
    }),
  )
  uploadAvatar(@Req() req: any, @UploadedFile() file: Express.Multer.File) {

    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return this.userService.updateAvatar(
      req.user_data.id,
      file.destination + '/' + file.filename,
    );
  }
}
