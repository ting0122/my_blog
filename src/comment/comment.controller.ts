import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Post()
    createComment(@Body() commentData: any){
        return this.commentService.createComment(commentData);
    }

    @Get()
    findAllComments(){
        return this.commentService.findAllComments();
    }

    @Get(':id')
    findCommentById(@Param('id') id: string){
        return this.commentService.findCommentById(id);
    }

    @Put('id')
    updateComment(@Param('id') id: string, @Body() commentData: any){
        return this.commentService.updateComment(id, commentData);
    }

    @Delete('id')
    deleteComment(@Param('id') id: string){
        return this.commentService.deleteComment(id);
    }
}
