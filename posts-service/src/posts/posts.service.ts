import { RedisPubSub } from 'graphql-redis-subscriptions';
import { NewPost, UpdatePost } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';
import { PUB_SUB } from 'src/pubsub/pubsub.module';

import { Inject, Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';

const POST_ADDED_EVENT = 'postAdded';
@Injectable()
export class PostService {
  constructor(
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
    private prisma: PrismaService,
  ) {}

  // data loader
  async getPostsByIds(ids: Array<string>): Promise<Post[] | null> {
    console.log(`Getting user with id (${ids.join(',')})`);
    const result = await this.prisma.post.findMany({
      where: {
        id: { in: ids.map((i) => parseInt(i)) },
      },
    });
    return result;
  }

  // Get a single post
  async post(id: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple posts
  async posts(criteria = {}): Promise<Post[]> {
    return await this.prisma.post.findMany(criteria);
  }

  // Create a post
  async createPost(input: NewPost): Promise<Post> {
    const post = await this.prisma.post.create({
      data: input,
    });

    await this.pubSub.publish(POST_ADDED_EVENT, { postAdded: post });
    return post;
  }

  // Update a post
  async updatePost(params: UpdatePost): Promise<Post> {
    const { id, published, title, content } = params;
    return await this.prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(published && { published }),
        ...(title && { title }),
        ...(content && { content }),
      },
    });
  }

  // delete a post
  async deletePost(id: string): Promise<Post> {
    return await this.prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
