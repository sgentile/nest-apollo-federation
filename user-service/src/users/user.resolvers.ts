import { NewUser, UpdateUser, User } from 'src/graphql';

import {
    Args, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference
} from '@nestjs/graphql';

import UserDataLoader from './user.dataloader';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolvers {
  constructor(
    private readonly userService: UserService,
    private readonly userDataLoader: UserDataLoader,
  ) {}

  @Query('users')
  async users() {
    console.log('Getting Users');
    return await this.userService.users();
  }

  @Query('user')
  async user(@Args('id') userId: string) {
    return await this.userService.user(userId);
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: string }) {
    // const user = await this.userService.User(reference.id);
    const user = await this.userDataLoader.batchUsers.load(reference.id);
    return user;
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return await this.userService.createUser(args);
  }

  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    return await this.userService.updateUser(args);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') args: string) {
    return await this.userService.deleteUser(args);
  }
}
