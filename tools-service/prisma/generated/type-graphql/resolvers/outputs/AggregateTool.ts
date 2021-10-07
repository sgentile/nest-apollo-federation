import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ToolAvgAggregate } from "../outputs/ToolAvgAggregate";
import { ToolCountAggregate } from "../outputs/ToolCountAggregate";
import { ToolMaxAggregate } from "../outputs/ToolMaxAggregate";
import { ToolMinAggregate } from "../outputs/ToolMinAggregate";
import { ToolSumAggregate } from "../outputs/ToolSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTool {
  @TypeGraphQL.Field(_type => ToolCountAggregate, {
    nullable: true
  })
  _count!: ToolCountAggregate | null;

  @TypeGraphQL.Field(_type => ToolAvgAggregate, {
    nullable: true
  })
  _avg!: ToolAvgAggregate | null;

  @TypeGraphQL.Field(_type => ToolSumAggregate, {
    nullable: true
  })
  _sum!: ToolSumAggregate | null;

  @TypeGraphQL.Field(_type => ToolMinAggregate, {
    nullable: true
  })
  _min!: ToolMinAggregate | null;

  @TypeGraphQL.Field(_type => ToolMaxAggregate, {
    nullable: true
  })
  _max!: ToolMaxAggregate | null;
}
