import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { Module } from '@nestjs/common';
import { GATEWAY_BUILD_SERVICE, GraphQLGatewayModule } from '@nestjs/graphql';
import { decode } from 'jsonwebtoken';
require('dotenv').config();

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  async willSendRequest({ request, context }) {
    const { userId } = await decode(context.jwt);
    if (userId) {
      request.http.headers.set('x-user-id', userId);
    }
  }
}

@Module({
  providers: [
    {
      provide: AuthenticatedDataSource,
      useValue: AuthenticatedDataSource,
    },
    {
      provide: GATEWAY_BUILD_SERVICE,
      useFactory: (AuthenticatedDataSource) => {
        return ({ name, url }) => new AuthenticatedDataSource({ url });
      },
      inject: [AuthenticatedDataSource],
    },
  ],
  exports: [GATEWAY_BUILD_SERVICE],
})
class BuildServiceModule {}
@Module({
  imports: [
    GraphQLGatewayModule.forRootAsync({
      useFactory: async () => ({
        server: {
          cors: true,
          path: 'api',
          context: ({ req }) => ({
            jwt: req.headers.authorization,
          }),
        },
        gateway: {
          // https://www.apollographql.com/docs/federation/api/apollo-gateway
          serviceList: [
            { name: 'posts', url: process.env.POSTS_SERVICE_URL },
            { name: 'users', url: process.env.USERS_SERVICE_URL },
          ],
          // debug: true,
          serviceHealthCheck: true,
          buildService({ name, url }) {
            console.log(name, url);
            return new AuthenticatedDataSource({ url });
          },
        },
        imports: [BuildServiceModule],
        inject: [GATEWAY_BUILD_SERVICE],
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
