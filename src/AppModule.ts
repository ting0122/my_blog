import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';


@Module({
  imports: [
    BlogModule,
    UserModule,
    CommentModule,
    TagModule,
    ConfigModule.forRoot({
      envFilePath: ['./development.env'],
      isGlobal: true,
      expandVariables: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {
}
