import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/posts.module';
import { PubSubModule } from './pubsub/pubsub.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PostModule,
    PubSubModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      // path: 'subscriptions',
      // subscriptions: {
      //   'graphql-ws': true,
      // },
      installSubscriptionHandlers: true,
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
