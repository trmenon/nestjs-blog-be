import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PostsServices } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
    constructor(
        private readonly postService: PostsServices
    ){}

    @Get('{/:userid}/')
    public getPosts(@Param('userid') userid:string,){
        return this.postService.findAll(userid)
    }

    @Post()
    public createPost(@Body() createPostDto: CreatePostDto){}
}
