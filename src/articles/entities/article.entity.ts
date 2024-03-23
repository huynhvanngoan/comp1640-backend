import { Academicyear } from 'src/academic-year/entities/academic-year.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/user/entities/user.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Article {
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

  @Column({ default: 'Pending' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.articles)
  // @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Academicyear, (academic) => academic.academics)
  // @JoinColumn({ name: 'user_id' })
  academic: Academicyear;

  @OneToMany(() => Comment, (comment) => comment.articles)
  comment: Comment;
}
