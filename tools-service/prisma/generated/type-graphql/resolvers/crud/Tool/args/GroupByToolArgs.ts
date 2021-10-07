import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolOrderByWithAggregationInput } from "../../../inputs/ToolOrderByWithAggregationInput";
import { ToolScalarWhereWithAggregatesInput } from "../../../inputs/ToolScalarWhereWithAggregatesInput";
import { ToolWhereInput } from "../../../inputs/ToolWhereInput";
import { ToolScalarFieldEnum } from "../../../../enums/ToolScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByToolArgs {
  @TypeGraphQL.Field(_type => ToolWhereInput, {
    nullable: true
  })
  where?: ToolWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ToolOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ToolOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ToolScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "link" | "image">;

  @TypeGraphQL.Field(_type => ToolScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ToolScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
