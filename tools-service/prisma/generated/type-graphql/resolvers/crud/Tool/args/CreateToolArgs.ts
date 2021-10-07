import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolCreateInput } from "../../../inputs/ToolCreateInput";

@TypeGraphQL.ArgsType()
export class CreateToolArgs {
  @TypeGraphQL.Field(_type => ToolCreateInput, {
    nullable: false
  })
  data!: ToolCreateInput;
}
