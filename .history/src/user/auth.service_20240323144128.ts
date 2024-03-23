import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDto } from './dtos/register-user.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dtos/Login.dto';
import { UserHelper } from 'src/helpers/user.helper';
import { FacultyService } from 'src/faculty/faculty.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async register(requestBody: RegisterUserDto, facultyIid: number) {
    // check email is exist
    const userByEmail = await this.userRepository.findOneBy({ email: requestBody.email });
    if (userByEmail) {
      throw new BadRequestException('Email already exists!');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(requestBody.password, 10);
    requestBody.password = hashedPassword;

    // create user instance
    const user = this.userRepository.create(requestBody);

    // assign facultyId
    user.faculty = { facultyId: facultyId };

    // save to db
    const savedUser = await this.userRepository.save(user);

    // generate jwt token
    const payload = UserHelper.generateUserPayload(savedUser);

    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });

    return {
      msg: 'User has been created!',
      access_token,
      data: savedUser,
    };
  }

  async login(requestBody: LoginUserDto) {
    const userByEmail = await this.userService.findByEmail(requestBody.email);

    if (!userByEmail) {
      throw new BadRequestException('Invalid Credentials!');
    }

    // check password

    const isMatchPassword = await bcrypt.compare(
      requestBody.password,
      userByEmail.password,
    );

    if (!isMatchPassword) {
      throw new BadRequestException('Invalid Credentials!');
    }

    // generate jwt token
    const payload = UserHelper.generateUserPayload(userByEmail);

    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
    let redirectUrl = '/'; // Default redirection URL
    switch (userByEmail.role) {
      case 'admin':
        redirectUrl = '/admin-dashboard'; // Redirect to admin dashboard
        break;
      case 'student':
        redirectUrl = '/student-dashboard'; // Redirect to student dashboard
        break;
      case 'guest':
        redirectUrl = '/guest-dashboard';
        break;
      case 'department-manager':
        redirectUrl = '/department-dashboard';
        break;
      case 'marketing-coordinator':
        redirectUrl = '/marketing-dashboard';
        break;
      default:
        break;
    }

    return {
      msg: 'User has been login successfully!',
      access_token,
      data: userByEmail,
      redirectUrl,
    };
  }
}
