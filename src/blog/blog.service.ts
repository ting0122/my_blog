import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
    constructor(@InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
    ){}

    async create(postData: Blog): Promise<Blog> {
        return this.blogRepository.save(postData);
    }

    async findAll(): Promise<Blog[]> {
        return this.blogRepository.find();
    }

    async findOne(id: number): Promise<Blog | undefined>{
        return this.blogRepository.findOneBy({id});
    }

    async update(id: number, postData: Blog): Promise<Blog | undefined>{
        await this.blogRepository.update(id, postData);
        return this.blogRepository.findOneBy({id});
    }

    async remove(id: number): Promise<void> {
        await this.blogRepository.delete(id);
    }
}
