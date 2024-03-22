import { Academicyear } from 'src/academic-year/entities/academic-year.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';


@Entity()
export class Article {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    image: string;

    @Column()
    file: string;

    @Column()
    status: string;

    @Column()
    date: Date;

    @ManyToOne(() => User, user => user.articles)
    // @JoinColumn({ name: 'user_id' })
    user: User;


    @OneToMany(() => Comment, comment => comment.articles)
    comment: Comment;
}
