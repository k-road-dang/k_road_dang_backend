import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';

@Module({
  providers: [],
  controllers: [LoginController],
})
export class LoginModule {}
