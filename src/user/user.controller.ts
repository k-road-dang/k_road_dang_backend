import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserInfoDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('유저 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '모든 유저 api' })
  async getAllUser(): Promise<UserInfoDto> {
    return {
      userId: 1,
      name: '홍길동',
    };
  }

  @Get(':userId')
  @ApiOperation({ summary: '사용자 정보 가져오기' })
  async getUser(@Param() params: UserInfoDto): Promise<UserInfoDto> {
    const { userId, name } = params;

    return {
      userId,
      name,
    };
  }
}
