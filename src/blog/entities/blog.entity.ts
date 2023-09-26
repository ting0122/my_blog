import { Comment } from "src/comment/entities/comment.entity";
import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";

@Entity()
export class Blog {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @OneToMany(()=>Comment, (comment)=>comment.blog)
    comments: Comment[];

}