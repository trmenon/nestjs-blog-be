import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
    })
    first_name: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: true,
    })
    last_name: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false,
    })
    @Column()
    password: string;
}