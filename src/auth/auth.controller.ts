import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor() {}


  @MessagePattern('auth.register.user')
  registerUser(@Payload() registerUserDto){
    return 'register User'
  }
  @MessagePattern('auth.login.user')
  loginUser(@Payload() loginUserDto){
    return 'login User'
  }
  @MessagePattern('auth.verify.user')
  verifyToken(@Payload() verifyTokenDto){
    return 'verify token'
  }
}
