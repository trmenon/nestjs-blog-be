import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UsersService))
        private readonly userService: UsersService
    ){}

    public login(email: string, password: string){
        const user = this.userService.findOneById(30);
        return "TOKEN";
    }

    public isAuthenticated(): boolean {return true;}
}
