import { Module } from '@nestjs/common';
import { UserResolvers } from './user.resolvers';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';
import UserDataLoader from './user.dataloader';

@Module({
  providers: [UserResolvers, UserService, UserDataLoader, PrismaService],
  exports: [UserService, UserDataLoader],
})
export class UserModule {}
