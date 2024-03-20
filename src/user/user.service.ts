import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(requestBody: RegisterUserDto) {
    const user = this.userRepository.create(requestBody);

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async updateById(id: number, requestBpdy: UpdateUserDto) {
    let user = await this.findById(id);

    if (!user) throw new NotFoundException('User does not exist');

    user = { ...user, ...requestBpdy };

    return this.userRepository.save(user);
  }

  async deleteById(id: number) {
    const user = await this.findById(id);

    if (!user) throw new NotFoundException('User does not exist');

    return this.userRepository.remove(user);
  }
}
