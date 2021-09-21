import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'posts', url: 'http://localhost:4000/graphql' },
          { name: 'users', url: 'http://localhost:4001/graphql' },
        ],
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
