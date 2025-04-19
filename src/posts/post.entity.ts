import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { postType } from "./enums/postType.enum";
import { postStatus } from "./enums/postStatus.enum";
import { Tag } from "src/tags/tag.entity";

@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 212
    })
    title: string;

    @Column({
        type: 'enum',
        enum: postType,
        nullable: false,
        default: postType.POST
    })
    postType: postType;

    @Column({
        type: 'text',
        nullable: false,
    })
    content: string;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 1024
    })
    img: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    @ManyToMany(()=> Tag, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    tags: Tag[];

    @Column({
        type: 'timestamp',
        nullable: false,
        default: new Date()
    })
    createdAt: Date;
}