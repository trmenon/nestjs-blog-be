import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, isURL, MaxLength, MinLength } from "class-validator";
import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto{
    @ApiProperty({
        description: "Title for the post",
        example: "Post Title"
    })
    @IsString()
    @MinLength(4)
    @MaxLength(212)
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        enum: postType,
        description: "Possible values: post | topic | event"
    })
    @IsEnum(postType)
    @IsNotEmpty()
    postType: postType;

    @ApiProperty({
        enum: postStatus,
        description: "Possible values: draft | scheduled | published | rejected"
    })

    @ApiPropertyOptional({
        description: "Content for the post",
        example: "Post Content"
    })
    @IsString()
    @MaxLength(1000)
    content: string;

    @ApiPropertyOptional({
        description: "Image URL",
        example: "http://www.imgurl.example.in"
    })
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    img?: string;

    @ApiProperty({
        description: "List of ids of tags as array",
        example: [1, 2]
    })
    @IsNotEmpty()
    @IsArray() 
    @IsInt({each: true}) //For each item validate for type is int
    tags: number[];
}
