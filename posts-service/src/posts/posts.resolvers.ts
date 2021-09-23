import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { PostService } from './posts.service';
import { NewPost, Post, UpdatePost } from 'src/graphql';

@Resolver('Post')
export class PostResolvers {
  constructor(private readonly postService: PostService) {}

  @Query('posts')
  async posts() {
    return this.postService.posts();
  }

  @Query('post')
  async post(@Args('id') args: string) {
    return this.postService.post(args);
  }

  @ResolveField('user')
  getUser(@Parent() post: Post) {
    return { __typename: 'User', id: post.userId };
  }

  @Mutation('createPost')
  async create(@Args('input') args: NewPost) {
    return this.postService.createPost(args);
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost) {
    return this.postService.updatePost(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string) {
    return this.postService.deletePost(args);
  }
}
