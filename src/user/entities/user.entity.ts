import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { LoginType } from '../../enum/AppEnum';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'user' })
@Unique(['userId'])
export class User {
  @PrimaryGeneratedColumn('rowid')
  @ApiProperty({
    description: '사용자 id',
  })
  id: number;

  @Column({ nullable: false })
  @ApiProperty({
    description: '사용자 nickname',
  })
  nickname: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: LoginType,
    default: LoginType.Kakao,
  })
  @ApiProperty({
    description: '사용자 loginType',
  })
  loginType: LoginType;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
