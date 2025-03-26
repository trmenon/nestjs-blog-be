import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";

export class CreatePostDto{
    title: string;
    postType: postType;
    postStatus: postStatus;
    content?: string;
    img?: string;
    tags?: string[];
}