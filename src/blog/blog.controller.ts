import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService){}

    @Post()
    create(@Body() postData: Blog){
        return this.blogService.create(postData);
    }

    @Get()
    findAll(){
        return this.blogService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.blogService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() postData: Blog){
        return this.blogService.update(id, postData);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.blogService.remove(id);
    }
}
