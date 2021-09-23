import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
  ResolveReference,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { NewUser, User, UpdateUser } from 'src/graphql';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  async posts() {
    return this.userService.Users();
  }

  @Query('user')
  async post(@Args('id') args: string) {
    return this.userService.User(args);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.userService.User(reference.id);
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
