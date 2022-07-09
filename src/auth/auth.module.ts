import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { KaKaoStrategy } from './strategies/kakao.strategy';
import { JwtAccessStrategy } from './strategies/jwtAccess.strategy';
import { JwtRefreshStrategy } from './strategies/jwtRefresh.strategy';
import { UserService } from '../user/user.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: process.env.JWT_ACCESS_SECRET_KEY,
          signOptions: {
            expiresIn: process.env.JWT_ACCESS_SECRET_KEY,
          },
        };
      },

      inject: [ConfigService],
    }),

    ConfigModule,
    UserModule,
  ],
  providers: [
    AuthService,
    KaKaoStrategy,
    UserService,
    JwtAccessStrategy,
    JwtRefreshStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
