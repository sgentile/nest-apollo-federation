import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from '@prisma/client';
import { NewPost, UpdatePost } from 'src/graphql';
import { PUB_SUB } from 'src/pubsub/pubsub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';

const POST_ADDED_EVENT = 'postAdded';
@Injectable()
export class PostService {
  constructor(
    @Inject(PUB_SUB) private pubSub: RedisPubSub,
    private prisma: PrismaService,
  ) {}

  // Get a single post
  async post(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple posts
  async posts(): Promise<Post[]> {
    return this.prisma.post.findMany({});
  }

  // Create a post
  async createPost(input: NewPost): Promise<Post> {
    const post = await this.prisma.post.create({
      data: input,
    });

    this.pubSub.publish(POST_ADDED_EVENT, { postAdded: post });
    return post;
  }

  // Update a post
  async updatePost(params: UpdatePost): Promise<Post> {
    const { id, published, title, content } = params;
    return this.prisma.post.update({
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
    return this.prisma.post.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
