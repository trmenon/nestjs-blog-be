import { forwardRef, Inject, Injectable } from '@nestjs/common';

// To simulate users
import { users_data } from './data';
import { AuthService } from 'src/auth/providers/auth.service';
import { PatchUserDto } from '../dtos/patch-user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * Class to connect to users data
 */
@Injectable()
export class UsersService {
  /**
   * @constructor
   * @param authService 
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  /**
   * Method to get all users
   * @param search 
   * @param page 
   * @param limit 
   * @returns 
   */
  public findAll(search: string, page: number, limit: number) {
    if (this.authService.isAuthenticated()) {
      return users_data
        .filter((user) => user.first_name === search)
        .slice((page - 1) * limit, (page - 1) * limit + limit);
    }
    return 'Access denied';
  }

  /**
   * Method to get specific user as per id of user
   * @param userId 
   * @returns 
   */
  public findOneById(userId: number) {
    if (this.authService.isAuthenticated()) {
      const user = users_data.find((user) => user.id === userId);
      return user;
    }
    return 'Access denied';
  }

  /**
   * Updates user by id of user 
   * @param userId 
   * @param payload 
   * @returns 
   */
  public updateById(userId: number, payload: PatchUserDto) {
    if(this.authService.isAuthenticated()){
      const user = this.findOneById(userId);
      if(user){
        return {
          status: 200,
          user: user,
          change: payload
        }
      }
      return "User does not exist";
    }
    return "Access Denied";
  }

  /**
   * Creates new user
   * @param payload 
   * @returns 
   */
  public async createUser(createUserDto: CreateUserDto){
    if(this.authService.isAuthenticated()){
      // Checking if user exist
      const existingUser = await this.usersRepository?.findOne({
        where: {email: createUserDto.email}
      });
      // Handle Exceptions
      // Create new user
      let newUser = this.usersRepository?.create(createUserDto);
      newUser = await this.usersRepository.save(newUser);
      return {
        status: 201,
        user: newUser,
        message: "New user added"
      }
    }
    return "Access Denied";
  }
}
