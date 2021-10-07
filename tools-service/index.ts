import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { buildFederatedSchema } from "./lib/buildFederatedSchema";
import { resolvers } from "./prisma/generated/type-graphql";

interface Context {
  prisma: PrismaClient;
}

async function main() {
  // const schema = await buildSchema({
  //   resolvers,
  //   emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
  //   validate: false,
  // });
  const schema = await buildFederatedSchema({ resolvers });
  // {
  //   resolvers: [ProductsResolver],
  //   orphanedTypes: [Product],
  // },
  // {
  //   Product: { __resolveReference: resolveProductReference },
  // }

  const prisma = new PrismaClient();
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  });
  const { port } = await server.listen(4002);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
