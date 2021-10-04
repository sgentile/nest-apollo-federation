import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
      // errorFormat: 'colorless',
    });
    this.$on<any>('query', (event: Prisma.QueryEvent) => {
      Logger.debug(
        `Query:  + ${event.query} ${event.params}`,
        'PrismaService:Query',
      );
      Logger.debug(
        'Duration: ' + event.duration + 'ms',
        'PrismaService:Duration',
      );
    });
  }

  // optional - https://docs.nestjs.com/recipes/prisma
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
