import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ToolOrderByWithRelationInput } from "../../../inputs/ToolOrderByWithRelationInput";
import { ToolWhereInput } from "../../../inputs/ToolWhereInput";
import { ToolWhereUniqueInput } from "../../../inputs/ToolWhereUniqueInput";
import { ToolScalarFieldEnum } from "../../../../enums/ToolScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyToolArgs {
  @TypeGraphQL.Field(_type => ToolWhereInput, {
    nullable: true
  })
  where?: ToolWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ToolOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ToolOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ToolWhereUniqueInput, {
    nullable: true
  })
  cursor?: ToolWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ToolScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "description" | "link" | "image"> | undefined;
}
