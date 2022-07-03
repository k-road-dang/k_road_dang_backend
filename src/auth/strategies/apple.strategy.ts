import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Payload } from '../jwt-payload';
import { ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { DecodedIdToken, Strategy, VerifyCallback } from 'passport-apple';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'apple') {
  constructor(
    // private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.APPLE_CLIENT_ID,
      teamID: process.env.APPLE_TEAM_ID,
      callbackURL: process.env.APPLE_CALLBACK_URL,
      keyID: process.env.APPLE_KEY_ID,
      privateKeyString: process.env.APPLE_KEY.replace(/\\n/g, '\n'),
      passReqToCallback: false,
    });
  }

  async validate(payload: Payload) {
    // const decodedIdToken: DecodedIdToken = this.jwtService.verify(idToken);
  }
}
