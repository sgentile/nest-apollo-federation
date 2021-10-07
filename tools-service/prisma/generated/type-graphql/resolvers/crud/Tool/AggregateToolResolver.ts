import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateToolArgs } from "./args/AggregateToolArgs";
import { Tool } from "../../../models/Tool";
import { AggregateTool } from "../../outputs/AggregateTool";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tool)
export class AggregateToolResolver {
  @TypeGraphQL.Query(_returns => AggregateTool, {
    nullable: false
  })
  async aggregateTool(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateToolArgs): Promise<AggregateTool> {
    return getPrismaFromContext(ctx).tool.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
