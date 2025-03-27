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
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

/**
 * Users Controller
 * Handles routing of users end points
 */
@Controller('users')
@ApiTags('users')
export class UsersController {
  /**
   * @constructor
   * @param userService 
   */
  constructor(private readonly userService: UsersService) {}

  /**
   * Fetches list of user
   * Accepts search query and pagination options
   * @param search 
   * @param page 
   * @param limit 
   * @returns 
   */
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

  /**
   * fetches user details corresponding to id of user
   * @param getUserParamDto 
   * @returns 
   */
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

  /**
   * Creates a new user
   * @param createuserDto 
   * @param headers 
   * @param ip 
   * @returns 
   */
  @Post()
  @ApiOperation({
    summary: 'Creates a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'users created successfully',
  })
  public createUser(
    @Body() createuserDto: CreateUserDto,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(headers, ip);
    return this.userService.createUser(createuserDto);
  }

  /**
   * Updates details of user with specific id
   * @param getUserParamDto 
   * @param patchUserDto 
   * @returns 
   */
  @Patch('/:id/')
  @ApiOperation({
    summary: 'Updates details of user',
  })
  @ApiResponse({
    status: 200,
    description: 'users details updated',
  })
  public patchUser(
    @Param() getUserParamDto: GetUsersParamDto,
    @Body() patchUserDto: PatchUserDto,
  ) {
    return this.userService.updateById(
      getUserParamDto?.id,
      patchUserDto
    );
  }
}
