import { Exclude } from 'class-transformer';
import { Academicyear } from 'src/academic-year/entities/academic-year.entity';
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

    @ManyToOne(() => User, user => user.articles)
    // @JoinColumn({ name: 'user_id' })
    user: User;
    @ManyToOne(() => Academicyear, academic => academic.academics)
    // @JoinColumn({ name: 'user_id' })
    academic: Academicyear;
}
