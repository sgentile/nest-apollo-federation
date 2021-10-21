import { PrismaService } from 'src/prisma.service';

import { Module } from '@nestjs/common';

import PostDataLoader from './posts.dataloader';
import { PostResolvers, UserResolvers } from './posts.resolvers';
import { PostService } from './posts.service';

@Module({
  providers: [
    PostResolvers,
    UserResolvers,
    PostDataLoader,
    PostService,
    PrismaService,
  ],
  exports: [PostService, PostDataLoader],
})
export class PostModule {}
