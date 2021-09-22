import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { NewUser, UpdateUser } from 'src/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // Get a single User
  async User(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
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
