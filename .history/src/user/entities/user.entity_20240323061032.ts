import { Exclude } from 'class-transformer';
import { Article } from 'src/articles/entities/article.entity';
import { Comment } from 'src/comments/entities/comment.entity';

import { Roles } from 'src/enums/roles.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class User {

  
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

    @OneToMany(() => Article, article => article.user)
    articles: Article[];

    @OneToMany(() => Comment, article => article.user)
    comments: Article[];
}
