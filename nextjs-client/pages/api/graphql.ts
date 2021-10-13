import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloGateway } from '@apollo/gateway';

export interface GraphQLContext {
    prisma: PrismaClient;
    req: NextApiRequest;
    res: NextApiResponse;
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const schema = await buildSchema({
    //     resolvers: [...resolvers],
    //     validate: false,
    // });

    // const apolloServer = new ApolloServer({
    //     schema,
    //     plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    //     context: (): GraphQLContext => ({ prisma: prisma(), req, res }),
    // });

    // const { url } = await apolloServer.listen(9000);
    // console.log(url);

    const gateway = new ApolloGateway({
        // supergraphSdl,
        serviceList: [
            { name: 'posts', url: 'http://localhost:4000/graphql' },
            { name: 'users', url: 'http://localhost:4001/graphql' },

            // ...additional subgraphs...
        ],
    });

    const server = new ApolloServer({
        gateway,
    });

    await server.start();

    await server.createHandler({
        path: '/api/graphql',
    })(req, res);
}
