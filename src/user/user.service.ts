/* eslint-disable @typescript-eslint/no-unused-vars */

import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import { genSalt, hash } from 'bcrypt'

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: createUserDto.email
            },
        });

        if (user) throw new ConflictException("Email duplicated");
        const salt = await genSalt(10);
        const hashedPassword = await hash(createUserDto.password, salt);
        const newUser = await this.prisma.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
            },
        });

        const { password , ...result } = newUser;
        return result;
    }

    async findByEmail(email: string) {
        return await this.prisma.user.findFirst({
            where: {
                email: email,
            }
        })
    }
    async findById(id: string) {
        return await this.prisma.user.findFirst({
            where: {
                id: id,
            }
        })
    }
}
