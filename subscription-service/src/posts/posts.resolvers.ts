import { Inject } from '@nestjs/common';
import { Resolver, Subscription, Query, Mutation, Args } from '@nestjs/graphql';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { NewPost, Post } from 'src/graphql';
import { PUB_SUB } from 'src/pubsub/pubsub.module';

const POST_ADDED_EVENT = 'postAdded';

@Resolver('Post')
export class PostResolvers {
  constructor(@Inject(PUB_SUB) private pubSub: RedisPubSub) {}

  // @Query()
  // async author(@Args('id') id: number) {
  //   return this.authorsService.findOneById(id);
  // }
  @Query()
  test(): string {
    return 'hello world';
  }

  // @Mutation('createPost')
  // async createPost(@Args('input') args: NewPost): Promise<Post> {
  //   const post = {
  //     id: '100000',
  //     title: args.title,
  //     content: args.content,
  //     published: false,
  //     createdAt: new Date().valueOf().toString(),
  //   } as Post;
  //   this.pubSub.publish(POST_ADDED_EVENT, { postAdded: post });
  //   return post;
  // }

  @Subscription((returns) => Post)
  postAdded() {
    return this.pubSub.asyncIterator(POST_ADDED_EVENT);
  }
}
