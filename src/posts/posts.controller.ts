import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsServices } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postService: PostsServices) {}

  /**
   * Fetches all posts by a user
   * @param userid 
   * @returns 
   */
  @ApiOperation({
    summary: 'Gets posts made by a user with specific id',    
  })
  @ApiResponse({
    status:200,
    description: "Posts created by user listed"
  })
  @Get('{/:userid}/')
  public getPosts(@Param('userid') userid: string) {
    return this.postService.findAll(userid);
  }

  @ApiOperation({
    summary: 'Creates a new post'
  })
  @ApiResponse({
    status:201,
    description: "You get a 201 responseif post is created"
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {}

  @ApiOperation({
    summary: 'Updates post as per id of post'
  })
  @ApiResponse({
    status:201,
    description: "You get a 201 responseif post is updated"
  })
  @Patch()
  public updatePost(@Body() patchBodyDto: PatchPostDto){}
}
