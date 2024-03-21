
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


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
}
