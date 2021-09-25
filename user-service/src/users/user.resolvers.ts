import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveReference,
  Context,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { NewUser, User, UpdateUser } from 'src/graphql';
import UserDataLoader from './user.dataloader';

@Resolver('User')
export class UserResolvers {
  constructor(
    private readonly userService: UserService,
    private readonly userDataLoader: UserDataLoader,
  ) {}

  @Query('users')
  async posts() {
    console.log('Getting Posts');
    return this.userService.Users();
  }

  @Query('user')
  async post(@Args('id') userId: string) {
    return this.userService.User(userId);
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: string }) {
    // const user = await this.userService.User(reference.id);
    const user = await this.userDataLoader.batchUsers.load(reference.id);
    return user;
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createUser(args);
  }

  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    return this.userService.updateUser(args);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') args: string) {
    return this.userService.deleteUser(args);
  }
}
