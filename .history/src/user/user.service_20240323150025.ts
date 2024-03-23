import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { RegisterUserDto } from './dtos/register-user.dto';
import { Permission } from 'src/helpers/checkPermission.helper';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { FacultyService } from 'src/faculty/faculty.service';
// import { UserHelper } from 'src/helpers/user.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private facultyService: FacultyService,
  ) {}

  // CRUD
  create(requestBody: RegisterUserDto, id) {
    const facultyId = this.facultyService.
    const user = this.userRepo.create(requestBody);

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findById(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.userRepo.findOneBy({ email });
  }

  async updateById(id: number, requestBody: UpdateUserDto, currentUser: User) {
    if (requestBody.role) {
      throw new BadRequestException('You cannot change role');
    }

    let user = await this.findById(id);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    const userByEmail = await this.findByEmail(requestBody.email);
    if (userByEmail) {
      throw new BadRequestException('Email already exist');
    }

    // id: 1 !== update id: 2
    Permission.check(id, currentUser);

    user = { ...user, ...requestBody };

    // hash password
    const hashedPassword = await bcrypt.hash(requestBody.password, 10);
    requestBody.password = hashedPassword;

    const updatedUser = await this.userRepo.save(user);

    return {
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    };
  }

  async deleteById(id: number, currentUser: User) {
    const user = await this.findById(id);

    Permission.check(id, currentUser);

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return this.userRepo.remove(user);
  }

  async updateAvatar(id: number, avatar: string): Promise<UpdateResult> {
    return await this.userRepo.update(id, { avatar });
  }
}
