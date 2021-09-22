import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/posts.module';
import { PubSubModule } from './pubsub/pubsub.module';

@Module({
  imports: [
    PostModule,
    PubSubModule,
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
