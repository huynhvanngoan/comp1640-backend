import { Exclude } from 'class-transformer';
import { Article } from 'src/articles/entities/article.entity';
import { Roles } from 'src/enums/roles.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


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

    @Column({ default: Roles.ADMIN })
    @Exclude()
    role: Roles;

}
