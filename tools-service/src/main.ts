import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const appConfig = config().app;
    await app.listen(appConfig.port);
    console.log(`Service is running on: ${await app.getUrl()}`);
}
bootstrap();
