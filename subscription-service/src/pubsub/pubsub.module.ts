import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Global, Module } from '@nestjs/common';

export const PUB_SUB = 'PUB_SUB';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PUB_SUB,
      useFactory: (configService: ConfigService) =>
        new RedisPubSub({
          connection: {
            host: configService.get('REDIS_HOST') || '127.0.0.1',
            port: configService.get('REDIS_PORT') || 6380,
          },
        }),
      inject: [ConfigService],
    },
  ],
  exports: [PUB_SUB],
})
export class PubSubModule {}
