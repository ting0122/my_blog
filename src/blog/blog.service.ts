import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    private readonly blogPosts: any[]=[];

    create(postData: any){
        const newPost = {id: Date.now, ...postData};
        this.blogPosts.push(newPost);
        return newPost;
    }

    findAll(){
        return this.blogPosts;
    }

    findOne(id: string){
        return this.blogPosts.find(post => post.id === +id);
    }

    update(id: string, postData: any){
        const postIndex = this.blogPosts.findIndex(post => post.id ===+id);
        if(postIndex >= 0){
            this.blogPosts[postIndex] = {...this.blogPosts[postIndex], ...postData};
            return this.blogPosts[postIndex];
        }
        return null;
    }

    remove(id: string){
        const postIndex = this.blogPosts.findIndex(post => post.id ===+id);
        if(postIndex >= 0){
            const deletedPost = this.blogPosts.slice(postIndex, 1);
            return deletedPost[0];
        }
        return null;
    }
}
