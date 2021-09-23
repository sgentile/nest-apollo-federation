import { Inject } from '@nestjs/common';
import { Resolver, Subscription, Query } from '@nestjs/graphql';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Post } from 'src/graphql';
import { PUB_SUB } from 'src/pubsub/pubsub.module';
import { request, gql } from 'graphql-request';
import { ConfigService } from '@nestjs/config';

const POST_ADDED_EVENT = 'postAdded';

@Resolver('Post')
export class PostResolvers {
  getPostQuery = gql`
    query GetPost($id: ID!) {
      post(id: $id) {
        id
        title
        content
        published
        createdAt
        user {
          id
          name
        }
      }
    }
  `;

  constructor(
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
    private configService: ConfigService,
  ) {}

  @Query()
  test(): string {
    return 'hello world';
  }

  @Subscription(POST_ADDED_EVENT, {
    async resolve(this: PostResolvers, value) {
      const endpoint = this.configService.get('GATEWAY_API_URL');
      const data = await request(endpoint, this.getPostQuery, {
        id: value.postAdded.id,
      });
      return data.post;
    },
  })
  postAdded() {
    return this.pubSub.asyncIterator(POST_ADDED_EVENT);
  }
}
