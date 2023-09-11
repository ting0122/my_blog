import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
    private readonly comments: any[]=[];

    createComment(commentData: any){
        const newComment = {id: Date.now(), ...commentData};
        this.comments.push(newComment);
        return newComment;
    }

    findAllComments(){
        return this.comments;
    }

    findCommentById(id: string){
        return this.comments.find(comment => comment.id === +id);
    }

    updateComment(id: string, commentData: any){
        const commentIndex = this.comments.findIndex(comment => comment.id === +id);
        if(commentIndex>=0){
            this.comments[commentIndex] = {...this.comments[commentIndex], commentData};
            return this.comments[commentIndex];
        }
        return null;
    }

    deleteComment(id: string){
        const commentIndex = this.comments.findIndex(comment => comment.id === +id);
        if(commentIndex>=0){
            const deleteComment = this.comments.slice(commentIndex,1);
            return this.comments[0];
        }
        return null;
    }



}
