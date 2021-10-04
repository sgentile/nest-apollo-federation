import { Injectable } from '@nestjs/common';
import { Tool } from '@prisma/client';
import { NewTool, UpdateTool } from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToolService {
    constructor(private prisma: PrismaService) {}

    // Get a single tool
    async tool(id: string): Promise<Tool | null> {
        return this.prisma.tool.findUnique({
            where: {
                id: parseInt(id),
            },
        });
    }

    // Get multiple tools
    async tools(): Promise<Tool[]> {
        return this.prisma.tool.findMany({});
    }

    // Create a tool
    async createTool(input: NewTool): Promise<Tool> {
        const tool = await this.prisma.tool.create({
            data: input,
        });
        return tool;
    }

    // Update a tool
    async updateTool(params: UpdateTool): Promise<Tool> {
        const { id, name, description, link, image } = params;
        return this.prisma.tool.update({
            where: {
                id: parseInt(id),
            },
            data: {
                ...(name && { name }),
                ...(description && { description }),
                ...(link && { link }),
                ...(image && { image }),
            },
        });
    }

    // delete a tool
    async deleteTool(id: string): Promise<Tool> {
        return this.prisma.tool.delete({
            where: {
                id: parseInt(id),
            },
        });
    }
}
