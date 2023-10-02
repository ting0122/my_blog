import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(tag)
        private readonly tagRepository: Repository<tag>,
    ){}

    async createTag(tagData: tag){
        const tag = this.tagRepository.create(tagData);
        return this.tagRepository.save(tag);
    }

    async findAllTags(){
        return this.tagRepository.find();
    }

    async findTagById(id: number){
        const tag = await this.tagRepository.findOneBy({id});
        if(!tag){
            throw new NotFoundException('Tag not found');
        }
        return tag;
    }

    async updateTag(id: number, tagData: tag){
        await this.findTagById(id);
        await this.tagRepository.update(id, tagData);
        return this.findTagById(id);
    }

    async deleteTag(id: number){
        const tag = await this.findTagById(id);
        return this.tagRepository.remove(tag);
    }
}
