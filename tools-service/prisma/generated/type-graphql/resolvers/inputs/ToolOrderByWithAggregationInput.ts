import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ToolAvgOrderByAggregateInput } from "../inputs/ToolAvgOrderByAggregateInput";
import { ToolCountOrderByAggregateInput } from "../inputs/ToolCountOrderByAggregateInput";
import { ToolMaxOrderByAggregateInput } from "../inputs/ToolMaxOrderByAggregateInput";
import { ToolMinOrderByAggregateInput } from "../inputs/ToolMinOrderByAggregateInput";
import { ToolSumOrderByAggregateInput } from "../inputs/ToolSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ToolOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  link?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ToolCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ToolCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ToolAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ToolAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ToolMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ToolMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ToolMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ToolMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ToolSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ToolSumOrderByAggregateInput | undefined;
}
