import { Module } from '@nestjs/common';
import { PostResolvers } from './posts.resolvers';

@Module({
  providers: [PostResolvers],
})
export class PostModule {}
