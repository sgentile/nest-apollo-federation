import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NewTool, UpdateTool } from 'src/graphql';
import { ToolService } from './tools.service';

@Resolver('Tool')
export class ToolResolvers {
    constructor(private readonly toolService: ToolService) {}

    @Query('tools')
    async tools() {
        return this.toolService.tools();
    }

    @Query('tool')
    async tool(@Args('id') args: string) {
        return this.toolService.tool(args);
    }

    // @ResolveField('user')
    // getUser(@Parent() tool: Tool) {
    //     return { __typename: 'User', id: tool.userId };
    // }

    @Mutation('createTool')
    async create(@Args('input') args: NewTool) {
        return this.toolService.createTool(args);
    }

    @Mutation('updateTool')
    async update(@Args('input') args: UpdateTool) {
        return this.toolService.updateTool(args);
    }

    @Mutation('deleteTool')
    async delete(@Args('id') args: string) {
        return this.toolService.deleteTool(args);
    }
}
