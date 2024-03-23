import { PrimaryGeneratedColumn } from "typeorm";


export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;
}