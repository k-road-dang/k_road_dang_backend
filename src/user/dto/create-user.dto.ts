import { ApiProperty } from '@nestjs/swagger';

export class UserInfoDto {
  @ApiProperty({ description: 'id' })
  userId: number;

  @ApiProperty({ description: 'name' })
  name: string;
}
