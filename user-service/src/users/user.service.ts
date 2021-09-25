import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User } from '@prisma/client';
import { NewUser, UpdateUser } from 'src/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // data loader
  async getUsersByIds(ids: readonly string[]): Promise<User[] | null> {
    console.log(`Getting users with ids (${ids.join(',')})`);
    const result = await this.prisma.user.findMany({});
    // const result = await this.prisma.$queryRaw<User[]>(
    //   Prisma.sql`SELECT * FROM User WHERE id IN (${ids})`,
    // );
    return result;
  }

  // Get a single User
  async User(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple Users
  async Users(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  // Create a User
  async createUser(input: NewUser): Promise<User> {
    return this.prisma.user.create({
      data: input,
    });
  }

  // Update a User
  async updateUser(params: UpdateUser): Promise<User> {
    const { id, name } = params;
    return this.prisma.user.update({
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
    return this.prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
