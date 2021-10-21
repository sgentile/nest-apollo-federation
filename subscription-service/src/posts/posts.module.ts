import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostResolvers } from './posts.resolvers';

@Module({
  providers: [PostResolvers],
  imports: [ConfigModule],
})
export class PostModule {}
