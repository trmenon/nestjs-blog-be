import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersService } from "src/users/providers/users.service";
import { Post } from "../post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "../dtos/create-post.dto";
import { Tag } from "src/tags/tag.entity";
import { TagsService } from "src/tags/providers/tags.service";
import { PatchPostDto } from "../dtos/patch-post.dto";

@Injectable()
export class PostsServices{
    constructor(
        private readonly userService: UsersService,
        private readonly tagsService: TagsService,
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        @InjectRepository(Tag)
        private tagsRepository: Repository<Tag>
    ){}
    public findAll(userid: string) {
        if(userid && Number(userid)){
            const user = this.userService.findOneById(Number(userid));
            if(user){return this.findById(userid);}
            return "User does not exist";
        }
        return this.postRepository?.find({
            relations:{tags: true}
        });
    }

    public findById(id): string {
        return `Getting post by ${id}`;
    }

    public async createPost(createPostDto: CreatePostDto){
        // Creating Tags
        let added_tags = await this.tagsService?.findMultipleTags(createPostDto?.tags);
        
        
        
        let newPost = this.postRepository?.create({...createPostDto, tags: added_tags});
        newPost = await this.postRepository?.save(newPost);
        return {
            status: 201,
            post: newPost,
            message: "New post added",
          }
    }

    public async updatePost(patchPostDto: PatchPostDto){
        // Find Posts
        let post = await this.postRepository.findOneBy({id: patchPostDto?.id});

        if(post){
            return this.postRepository?.update({id: patchPostDto?.id}, {
                title: patchPostDto.title ?? post?.title,
                content: patchPostDto.content?? post?.content,
                postType: patchPostDto.postType?? post?.postType,
                img: patchPostDto.img?? post?.img
            });
        //   return await this.postRepository?.save({
        //     ...post,
        //     title: patchPostDto.title ?? post?.title,
        //     content: patchPostDto.content?? post?.content,
        //     postType: patchPostDto.postType?? post?.postType,
        //     img: patchPostDto.img?? post?.img
        //   })  
        }
        return {status: "post not found", data: post}

        // Update properties of the Post
        // if(post){
        //     post.title = patchPostDto.title ?? post?.title;
        //     post.content = patchPostDto.content?? post?.content;
        //     post.postType = patchPostDto.postType?? post?.postType;
        //     post.img = patchPostDto.img?? post?.img;

        //     // Find and Assign new Tags
        //     if(patchPostDto.tags){
        //         const tags = await this.tagsService?.findMultipleTags(patchPostDto.tags); 
        //         post.tags = tags;
        //     }
            

        //     // Save Post and return it
        //     try{
        //         return await this.postRepository?.save(post)  
        //     }catch(err){
        //         return {error: err}
        //     }
        //     // return await this.postRepository?.save(post)
        // }

        // return {status: "post not found", data: post}
    }
}