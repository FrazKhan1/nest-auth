import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { RegisterUserDTO } from 'src/dto/RegisterUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() body: RegisterUserDTO) {
    const hash = await bcrypt.hash(body.password, 10);
    const result = this.authService.createUser({ ...body, password: hash });
    return result;
  }
}
