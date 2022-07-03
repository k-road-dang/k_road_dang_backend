import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { KaKaoStrategy } from './strategies/kakao.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: process.env.JWT_SECRET_KEY,
          signOptions: {
            expiresIn: 20,
          },
        };
      },

      inject: [ConfigService],
    }),
    ConfigModule,
    UserModule,
  ],
  providers: [AuthService, KaKaoStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
