import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { hash, compare } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { fullname, email, password, avatar, role } = createUserDto;

    const user = await this.userModel.findOne({ email });

    if (user) throw new ConflictException('Email is already existed.');

    const newUser = await this.userModel.create({
      fullname,
      email,
      password: await hash(password, 10),
      avatar,
      role,
    });

    return newUser;
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findById(id: string) {
    return await this.userModel.findOne({ _id: id });
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto);
    const payload = {
      username: user.email,
      sub: {
        name: user.fullname,
      },
    };

    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '1h',
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH_TOKEN,
        }),
      },
    };
  }

  async validateUser(loginDto: LoginDto) {
    const user = await this.findByEmail(loginDto.email);

    if (user && (await compare(loginDto.password, user.password))) {
      return user;
    }

    throw new UnauthorizedException();
  }
}
