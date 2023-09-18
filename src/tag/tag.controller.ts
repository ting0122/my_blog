import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Post()
    createTag(@Body() tagData: any){
        return this.tagService.createTag(tagData);
    }

    @Get()
    findAllTags(){
        return this.tagService.findAllTags();
    }

    @Get(':id')
    findTagById(@Param('id') id: string){
        return this.tagService.findTagById(id);
    }

    @Put(':id')
    updateTag(@Param('id') id: string, @Body() tagData: any){
        return this.tagService.updateTag(id, tagData);
    }

    @Delete(':id')
    deleteTag(@Param('id') id: string){
        return this.tagService.deleteTag(id);
    }

}
