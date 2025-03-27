import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, isURL, MaxLength, MinLength } from "class-validator";
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
    @IsEnum(postStatus)
    @IsNotEmpty()
    postStatus: postStatus;

    @ApiPropertyOptional({
        description: "Content for the post",
        example: "Post Content"
    })
    @IsString()
    @MaxLength(1000)
    @IsOptional()
    content?: string;

    @ApiPropertyOptional({
        description: "Image URL",
        example: "http://www.imgurl.example.in"
    })
    @IsOptional()
    @IsUrl()
    img?: string;

    @ApiPropertyOptional({
        description: "List of tags as array",
        example: ['nestjs', 'typescript']
    })
    @IsOptional()
    @IsArray() 
    @IsString({each: true}) //For each item validate for type is string
    @MinLength(3, {each: true}) //Min length 3 for each
    tags?: string[];
}