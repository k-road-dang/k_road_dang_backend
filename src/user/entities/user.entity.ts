import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Gender, LoginType } from '../../enum/AppEnum';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'user' })
@Unique(['id'])
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
  social_id: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: LoginType,
    default: LoginType.Kakao,
  })
  @ApiProperty({
    description: '사용자 loginType Apple || Kakao',
  })
  login_type: LoginType;

  @Column({ nullable: false })
  @ApiProperty({
    description: '사용자 nickname',
  })
  nickname: string;

  @Column({ nullable: false })
  @ApiProperty({
    description: '사용자 관심 카테고리 ex) 등산, 라이딩',
  })
  category: string;

  @Column({ nullable: false, type: 'enum', enum: Gender, default: Gender.M })
  @ApiProperty({
    description: '사용자 성별',
  })
  gender: Gender;

  @Column({ nullable: false })
  @ApiProperty({
    description: '사용자 위도',
  })
  lat: number;

  @Column({ nullable: false })
  @ApiProperty({
    description: '사용자 경도',
  })
  lng: number;

  @Column({ nullable: false })
  @ApiProperty({
    description: '프로필 이미지 경로 ( s3 )',
  })
  image: string;

  @Column({ nullable: false })
  @ApiProperty({
    description: '등급',
  })
  grade: string;

  @Column({ nullable: false })
  @ApiProperty({
    description: '사용자 경험치',
  })
  exp: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
