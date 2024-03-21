import { Exclude } from 'class-transformer';
import { Article } from 'src/articles/entities/article.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class Academicyear {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    openDay: Date;

    @Column()
    closeDay: Date;

    @OneToMany(() => Article, (articles) => articles.academic)
    articles: Article[];

}
