import * as DataLoader from 'dataloader';

import { Injectable, Scope } from '@nestjs/common';

import { PostService } from './posts.service';

@Injectable({ scope: Scope.REQUEST })
export default class PostDataLoader {
  constructor(private postService: PostService) {}

  public readonly batchPosts = new DataLoader(async (ids: string[]) => {
    const posts = await this.postService.getPostsByIds(ids);
    const postsMap = new Map(posts.map((post) => [post.id, post]));
    return ids.map((postId) => postsMap.get(parseInt(postId)));
  });

  public readonly batchUserPosts = new DataLoader(async (ids: string[]) => {
    const posts = await this.postService.getUsersPosts(ids);
    const usersPostsArray = ids.map((userId) =>
      posts.filter((post) => post.userId === parseInt(userId)),
    );
    return usersPostsArray;
  });
}
