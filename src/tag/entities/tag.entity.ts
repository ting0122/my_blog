import { Blog } from "src/blog/entities/blog.entity";
import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";

@Entity('tags')
export class tag {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(()=>Blog, (blog)=>blog.tags)
    @JoinTable()
    blogs: Blog[];
}