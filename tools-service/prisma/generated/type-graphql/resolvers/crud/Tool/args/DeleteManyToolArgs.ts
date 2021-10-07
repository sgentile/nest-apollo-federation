import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolWhereInput } from "../../../inputs/ToolWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyToolArgs {
  @TypeGraphQL.Field(_type => ToolWhereInput, {
    nullable: true
  })
  where?: ToolWhereInput | undefined;
}
