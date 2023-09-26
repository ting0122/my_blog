import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ){}

    async createComment(commentData: Partial<Comment>): Promise<Comment> {
        const comment = this.commentRepository.create(commentData);
        return await this.commentRepository.save(comment);
    }

    async findCommentById(BlogId: number): Promise<Comment[]> {
        return await this.commentRepository.find({
            where: { blog: {id: BlogId}},
        });
    }

    async updateComment(commentId: number, commentData: Partial<Comment>): Promise<Comment[]> {
        const comment = await this.commentRepository.findOne({where: {id: commentId}});
        if(!comment){
            throw new NotFoundException('Comment not found');
        }

        await this.commentRepository.update(commentId, commentData);

        return await this.commentRepository.find({where: {id: commentId}});
    }

    async deleteComment(commentId: number): Promise<void> {
        const comment = await this.commentRepository.findOne({where: {id: commentId}});
        if(!comment){
            throw new NotFoundException('Comment not found');
        }
        await this.commentRepository.remove(comment);
    }
}
