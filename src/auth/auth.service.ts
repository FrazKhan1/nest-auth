import { Injectable } from '@nestjs/common';
import { RegisterUserDTO } from 'src/dto/RegisterUser.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  createUser(body: RegisterUserDTO) {
    return this.userService.registerUserService(body);
  }
}
