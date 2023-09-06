import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [BlogModule, UserModule, CommentModule, TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}