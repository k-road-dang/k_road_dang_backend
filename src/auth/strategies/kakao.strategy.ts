import { AuthService } from '../auth.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { UserService } from '../../user/user.service';
import { ErrorCode, ErrorMessage } from '../../enum/AppEnum';

@Injectable()
export class KaKaoStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {
    super({
      clientID: process.env.CLIENT_ID,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile, done) {
    try {
      const kakaoId = profile.id;
      const findUser = this.userService.findUser(kakaoId);
      if (findUser) done(null, findUser);

      throw new HttpException(
        {
          status: ErrorCode.NEED_SIGN_UP,
          error: ErrorMessage.NEED_SIGN_UP,
        },
        400,
      );
    } catch (e) {
      throw new Error(`kakao validate error : ${e}`);
    }
  }
}
