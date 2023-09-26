import { Blog } from "src/blog/entities/blog.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Comment {

    @PrimaryColumn()
    id: number;

    @Column()
    content: string;

    @Column({default: ()=>'CURRENT_TIMESTAMP'})
    createAt: Date;

    @ManyToOne(()=> Blog, (blog)=>blog.comments)
    @JoinColumn({name: 'BlogId'})
    blog: Blog;
}