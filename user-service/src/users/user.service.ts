import { NewUser, UpdateUser } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // data loader
  async getUsersByIds(ids: Array<string>): Promise<User[] | null> {
    console.log(`Getting user with id (${ids.join(',')})`);
    const result = await this.prisma.user.findMany({
      where: {
        id: { in: ids.map((i) => parseInt(i)) },
      },
    });
    return result;
  }

  // Get a single User
  async user(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple Users
  async users(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }

  // Create a User
  async createUser(input: NewUser): Promise<User> {
    return await this.prisma.user.create({
      data: input,
    });
  }

  // Update a User
  async updateUser(params: UpdateUser): Promise<User> {
    const { id, name } = params;
    return await this.prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(name && { name }),
      },
    });
  }

  // delete a User
  async deleteUser(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
