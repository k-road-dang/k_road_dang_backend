import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * 사용자 social_id를 기반으로 해당 사용자의 정보를 가져오는 API
   * @param social_id 사용자 social_id를 param으로 받음
   * @returns 사용자 정보
   */
  async findUser(social_id: string): Promise<User | undefined> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.social_id =:social_id', { social_id })
      .getOne();
  }
}
