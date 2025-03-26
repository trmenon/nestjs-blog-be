import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

// To simulate users
import { users_data } from './data';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(search: string, page: number, limit: number) {
    if (this.authService.isAuthenticated()) {
      return users_data
        .filter((user) => user.first_name === search)
        .slice((page - 1) * limit, (page - 1) * limit + limit);
    }
    return 'Access denied';
  }

  public findOneById(userId: number) {
    if (this.authService.isAuthenticated()) {
      const user = users_data.find((user) => user.id === userId);
      return user;
    }
    return 'Access denied';
  }
}
