import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateTagDto {
    @ApiProperty({
        description: "Name of the tag",
        example: "Javascript"
    })
    @IsString()
    @MinLength(4)
    @MaxLength(256)
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: "URL",
        example: "My-Tag"
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: "Use only small letters or numbers"
    })
    @MaxLength(256)
    slug: string;

    @ApiPropertyOptional({
        description: "Description of the tag",
        example: "This is a tag to be used to tag javascript related discussions"
    })
    @IsOptional()
    @IsString()
    description?: string;


}