import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    des: string;

    @OneToMany(() => User, (user) => user?.facultys)
    user: User;
}