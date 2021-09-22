import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
require('dotenv').config();
@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
        path: 'api',
      },
      gateway: {
        serviceList: [
          { name: 'posts', url: process.env.POSTS_SERVICE_URL },
          { name: 'users', url: process.env.USERS_SERVICE_URL },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
