import { Exclude } from 'class-transformer';
import { Article } from 'src/articles/entities/article.entity';
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

    @Column()
    role: Roles;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Article, (articles) => articles.user)
    articles: Article[];
}
