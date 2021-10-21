import { NewPost, Post, UpdatePost, User } from 'src/graphql';

import {
    Args, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference
} from '@nestjs/graphql';

import PostDataLoader from './posts.dataloader';
import { PostService } from './posts.service';

@Resolver('Post')
export class PostResolvers {
  constructor(
    private readonly postService: PostService,
    private readonly postDataLoader: PostDataLoader,
  ) {}

  @Query('posts')
  async posts() {
    return await this.postService.posts();
  }

  @Query('post')
  async post(@Args('id') args: string) {
    return await this.postService.post(args);
  }

  @ResolveField('user')
  getUser(@Parent() post: Post) {
    console.log('called resolve user');
    return { __typename: 'User', id: post.userId };
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: string }) {
    const user = await this.postDataLoader.batchPosts.load(reference.id);
    return user;
  }

  @Mutation('createPost')
  async create(@Args('input') args: NewPost) {
    return await this.postService.createPost(args);
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost) {
    return await this.postService.updatePost(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string) {
    return await this.postService.deletePost(args);
  }
}

@Resolver('User')
export class UserResolvers {
  constructor(private readonly postDataLoader: PostDataLoader) {}

  @ResolveField('posts')
  async getPosts(@Parent() user: User) {
    console.log('called resolve posts');
    const posts = await this.postDataLoader.batchUserPosts.load(user.id);
    return posts;
  }
}
