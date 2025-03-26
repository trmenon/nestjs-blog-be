import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";

@Injectable()
export class PostsServices{
    constructor(
        private readonly userService: UsersService
    ){}
    public findAll(userid: string): string {
        if(userid && Number(userid)){
            const user = this.userService.findOneById(Number(userid));
            if(user){return this.findById(userid);}
            return "User does not exist";
        }
        return "getting all posts";
    }

    public findById(id): string {
        return `Getting post by ${id}`;
    }
}