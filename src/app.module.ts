import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { ConfigService } from './config/config.service';
import databaseConfig from './config/database.config';
import { ConfigModule } from '@nestjs/config/dist';

@Module({
  imports: [
    BlogModule, 
    UserModule, 
    CommentModule, 
    TagModule,
    ConfigModule.forRoot({
        isGlobal: true,
        load:[databaseConfig],
    })
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
