import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { UserService } from './user.service';

@Injectable({ scope: Scope.REQUEST })
export default class UserDataLoader {
  constructor(private userService: UserService) {}

  public readonly batchUsers = new DataLoader(async (ids: string[]) => {
    const users = await this.userService.getUsersByIds(ids);
    const usersMap = new Map(users.map((user) => [user.id, user]));
    return ids.map((userId) => usersMap.get(parseInt(userId)));
  });
}
