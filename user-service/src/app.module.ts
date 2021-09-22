import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    UserModule,
    GraphQLFederationModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
