import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { config } from './config/config';
import { ToolModule } from './tools/tools.module';

@Module({
    imports: [
        ToolModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        GraphQLFederationModule.forRoot({
            typePaths: ['./**/*.graphql'],
        }),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
