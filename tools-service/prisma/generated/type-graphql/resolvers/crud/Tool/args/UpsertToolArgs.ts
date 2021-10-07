import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolCreateInput } from "../../../inputs/ToolCreateInput";
import { ToolUpdateInput } from "../../../inputs/ToolUpdateInput";
import { ToolWhereUniqueInput } from "../../../inputs/ToolWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertToolArgs {
  @TypeGraphQL.Field(_type => ToolWhereUniqueInput, {
    nullable: false
  })
  where!: ToolWhereUniqueInput;

  @TypeGraphQL.Field(_type => ToolCreateInput, {
    nullable: false
  })
  create!: ToolCreateInput;

  @TypeGraphQL.Field(_type => ToolUpdateInput, {
    nullable: false
  })
  update!: ToolUpdateInput;
}
