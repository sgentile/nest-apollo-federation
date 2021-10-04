import { Module } from '@nestjs/common';
import { ToolService } from './tools.service';
import { PrismaService } from 'src/prisma.service';
import { ToolResolvers } from './tools.resolvers';

@Module({
    providers: [ToolResolvers, ToolService, PrismaService],
})
export class ToolModule {}
