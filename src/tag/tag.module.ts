import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tag } from './entities/tag.entity';

@Module({
  imports:[TypeOrmModule.forFeature([tag])],
  controllers: [TagController],
  providers: [TagService]
})
export class TagModule {}
