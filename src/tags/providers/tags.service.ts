import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private readonly tagsRepository: Repository<Tag>
    ){}


    public async create(createTagDto: CreateTagDto){
        let tag =this.tagsRepository.create(createTagDto);
        return await this.tagsRepository.save(tag);
    }

    public async findMultipleTags(tags: number[]){
        const result = await this.tagsRepository.find({
            where: {id: In(tags)}
        });
        return result;
    }
}
