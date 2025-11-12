import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterUserDTO } from 'src/dto/RegisterUser.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async registerUserService(body: RegisterUserDTO) {
    const checkUser = await this.userModel.find({ email: body.email });
    if (checkUser.length > 0) {
      return { data: null, message: 'User already exists' };
    }
    const newUser = await this.userModel.create(body);
    await newUser.save();
    return { data: newUser, message: 'User registered successfully' };
  }
}
