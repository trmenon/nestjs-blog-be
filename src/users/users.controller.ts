import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
// import

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  // @Get('/:id?/') => Decorator syntax if using NestJs V10 that leverages Express 4
  @Get()
  @ApiOperation({
    summary: 'fetches a list of users as per pagination options requested',
  })
  @ApiResponse({
    status: 200,
    description: 'users fetched successfully',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Number of items per query',
    example: 20,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'Page number requested',
    example: 1,
  })
  @ApiQuery({
    name: 'search',
    type: 'string',
    required: false,
    description: 'To search user by first name',
    example: 'Alison',
  })
  public getUsers(
    @Query('search') search: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
  ) {
    return this.userService.findAll(search, page, limit);
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'fetches user details corresponding to id of user',
  })
  @ApiResponse({
    status: 200,
    description: 'users fetched successfully',
  })
  public getUserdetails(@Param() getUserParamDto: GetUsersParamDto) {
    return this.userService.findOneById(getUserParamDto.id);
  }

  @Post()
  public createUser(
    @Body() createuserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(headers, ip);
    let metadata = 'No user data received';
    if (createuserDto) {
      metadata = JSON.stringify(createuserDto);
    }
    return `Post request to create a users=> ${metadata}`;
  }

  @Patch('/:id/')
  public patchUser(
    @Param() getUserParamDto: GetUsersParamDto,
    @Body() patchUserDto: PatchUserDto,
  ) {
    if (getUserParamDto?.id) {
      return `You have requested to patch user with id: ${getUserParamDto?.id} with data ${JSON.stringify(patchUserDto)}`;
    }
    return 'No id requested for patch';
  }
}
