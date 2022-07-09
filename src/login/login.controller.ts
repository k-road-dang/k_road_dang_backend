import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('login')
export class LoginController {
  constructor() {}

  @Post('/kakao')
  @ApiOperation({ summary: '카카오 로그인 api' })
  async userLogin(
    @Body() params: { token: string },
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const { token } = params;
    console.log('params', token);
    return {
      accessToken: 'token',
      refreshToken: 'ss',
    };
  }
}
