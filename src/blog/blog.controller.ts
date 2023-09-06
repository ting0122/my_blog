import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService){}

    @Post()
    create(@Body() postData: any){
        return this.blogService.create(postData);
    }

    @Get()
    findAll(){
        return this.blogService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.blogService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() postData: any){
        return this.blogService.update(id, postData);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.blogService.remove(id);
    }
}
