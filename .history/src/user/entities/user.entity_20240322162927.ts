import { Exclude } from 'class-transformer';

import { Roles } from 'src/enums/roles.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;
    @Column({ nullable: true, default: null })
    avatar: string;

    @Column({ default: Roles.ADMIN })
    @Exclude()
    role: Roles;

}
