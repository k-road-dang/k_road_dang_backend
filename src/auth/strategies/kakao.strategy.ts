import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

@Injectable()
export class KaKaoStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.CLIENT_ID,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile, done) {
    const kakaoId = profile.id;
  }
}
