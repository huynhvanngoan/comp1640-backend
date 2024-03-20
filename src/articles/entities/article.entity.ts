import { Exclude } from 'class-transformer';
import { Roles } from 'src/enums/roles.enum';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


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

    @ManyToOne(() => User, user => user.article)
    // @JoinColumn({ name: 'user_id' })
    user: User;
}
