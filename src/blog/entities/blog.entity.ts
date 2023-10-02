import { Comment } from "src/comment/entities/comment.entity";
import { tag } from "src/tag/entities/tag.entity";
import { Entity, Column, PrimaryColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";

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

    @ManyToMany(()=> tag, (tag)=>tag.blogs)
    @JoinTable()
    tags: tag[];
}