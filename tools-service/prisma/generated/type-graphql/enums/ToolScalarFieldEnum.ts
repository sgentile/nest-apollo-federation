import * as TypeGraphQL from "type-graphql";

export enum ToolScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  link = "link",
  image = "image"
}
TypeGraphQL.registerEnumType(ToolScalarFieldEnum, {
  name: "ToolScalarFieldEnum",
  description: undefined,
});
