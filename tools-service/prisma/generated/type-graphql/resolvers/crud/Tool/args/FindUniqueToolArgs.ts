import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolWhereUniqueInput } from "../../../inputs/ToolWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueToolArgs {
  @TypeGraphQL.Field(_type => ToolWhereUniqueInput, {
    nullable: false
  })
  where!: ToolWhereUniqueInput;
}
