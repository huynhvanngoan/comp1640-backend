// comment.entity.ts
import { Article } from 'src/articles/entities/article.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Comment {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: null })
    content: string;

    @ManyToOne(() => Article, article => article.comment)
    // @JoinColumn({ name: 'articleId' })
    article: Article;

    @ManyToOne(() => User, user => user.comments)
    user: User;
}
