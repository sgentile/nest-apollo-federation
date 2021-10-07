import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolUpdateInput } from "../../../inputs/ToolUpdateInput";
import { ToolWhereUniqueInput } from "../../../inputs/ToolWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateToolArgs {
  @TypeGraphQL.Field(_type => ToolUpdateInput, {
    nullable: false
  })
  data!: ToolUpdateInput;

  @TypeGraphQL.Field(_type => ToolWhereUniqueInput, {
    nullable: false
  })
  where!: ToolWhereUniqueInput;
}
