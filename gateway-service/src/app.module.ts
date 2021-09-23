import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { decode } from 'jsonwebtoken';
require('dotenv').config();

// class AuthenticatedDataSource extends RemoteGraphQLDataSource {
//   async willSendRequest({ request, context }) {
//     const { userId } = await decode(context.jwt);
//     request.http.headers.set('x-user-id', userId);
//   }
// }
@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
        path: 'api',
      },
      gateway: {
        // https://www.apollographql.com/docs/federation/api/apollo-gateway
        serviceList: [
          { name: 'posts', url: process.env.POSTS_SERVICE_URL },
          { name: 'users', url: process.env.USERS_SERVICE_URL },
        ],
        debug: true,
        // serviceHealthCheck: true,
        // buildService({ name, url }) {
        //   console.log(name, url);
        //   return new AuthenticatedDataSource({ url });
        // },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
