// import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
  console.log(`Subscription Servicie is running on: ${await app.getUrl()}`);
}
bootstrap();
