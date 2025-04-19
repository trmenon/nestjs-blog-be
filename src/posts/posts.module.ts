import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsServices } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Tag } from 'src/tags/tag.entity';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  controllers: [PostsController],
  providers: [PostsServices],
  imports: [
    UsersModule,
    TagsModule,
    TypeOrmModule.forFeature([Post, Tag])
  ]
})
export class PostsModule {

}
