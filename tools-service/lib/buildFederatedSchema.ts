import { specifiedDirectives } from "graphql";
import federationDirectives from "@apollo/federation/dist/directives";
import gql from "graphql-tag";
import {
  printSchema,
  buildFederatedSchema as buildApolloFederationSchema,
} from "@apollo/federation";
import { addResolversToSchema, GraphQLResolverMap } from "apollo-graphql";
import {
  buildSchema,
  BuildSchemaOptions,
  createResolversMap,
} from "type-graphql";
import { resolvers } from "../prisma/generated/type-graphql";
import path from "path";

export async function buildFederatedSchema(
  options: Omit<BuildSchemaOptions, "skipCheck">,
  referenceResolvers?: GraphQLResolverMap<any>
) {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });

  const federatedSchema = buildApolloFederationSchema({
    typeDefs: gql(printSchema(schema)),
    resolvers: createResolversMap(schema) as any,
  });

  if (referenceResolvers) {
    addResolversToSchema(federatedSchema, referenceResolvers);
  }
  return federatedSchema;
}
