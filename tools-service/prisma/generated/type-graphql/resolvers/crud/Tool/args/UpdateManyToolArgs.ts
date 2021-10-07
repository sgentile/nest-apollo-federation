import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolUpdateManyMutationInput } from "../../../inputs/ToolUpdateManyMutationInput";
import { ToolWhereInput } from "../../../inputs/ToolWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyToolArgs {
  @TypeGraphQL.Field(_type => ToolUpdateManyMutationInput, {
    nullable: false
  })
  data!: ToolUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ToolWhereInput, {
    nullable: true
  })
  where?: ToolWhereInput | undefined;
}
