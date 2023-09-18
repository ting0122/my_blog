import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
    private readonly tags: any[]=[];

    createTag(tagData: any){
        const newTag = { id: Date.now(), ...tagData };
        this.tags.push(newTag);
        return newTag;
    }

    findAllTags(){
        return this.tags;
    }

    findTagById(id: string){
        return this.tags.find(tag => tag.id ===+id);
    }

    updateTag(id: string, tagData: any){
        const tagIndex = this.tags.findIndex(tag => tag.id === +id);
        if(tagIndex>=0){
            this.tags[tagIndex] = { ...this.tags[tagIndex], ...tagData };
            return this.tags[tagIndex];
        }
        return null;
    }

    deleteTag(id: string){
        const tagIndex = this.tags.findIndex(tag => tag.id === +id);
        if(tagIndex>=0){
            const deleteTag = this.tags.splice(tagIndex, 1);
            return deleteTag[0];
        }
        return null;
    }
}
