/* eslint-disable @typescript-eslint/no-unused-vars */

import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { genSalt, hash } from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) {}

    async create(createUserDto: CreateUserDto) {
        const user = await this.userModel.findOne({
            where: {
                email: createUserDto.email
            },
        });

        if (user) throw new ConflictException("Email duplicated");
        const salt = await genSalt(10);
        const hashedPassword = await hash(createUserDto.password, salt);
        const newUser = await this.userModel.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
            },
        });

        const { password , ...result } = newUser;
        return result;
    }

    async findByEmail(email: string) {
        return await this.userModel.findOne({
            where: {
                email: email,
            }
        })
    }
    async findById(id: string) {
        return await this.userModel.findOne({
            where: {
                id: id,
            }
        })
    }
}
