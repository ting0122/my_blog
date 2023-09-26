import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entities/comment.entity';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService){}

    @Post()
    createComment(@Body() commentData: Comment){
        return this.commentService.createComment(commentData);
    }

    @Get(':id')
    findCommentById(@Param('id') id: number){
        return this.commentService.findCommentById(id);
    }

    @Put('id')
    updateComment(@Param('id') id: number, @Body() commentData: Comment){
        return this.commentService.updateComment(id, commentData);
    }

    @Delete('id')
    deleteComment(@Param('id') id: number){
        return this.commentService.deleteComment(id);
    }
}
