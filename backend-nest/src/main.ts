import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes sent props that are not expected
      forbidNonWhitelisted: true, // informs the client with an error message that unexpected data is sent
      transform: true, // tries to transform the payload from client into DTO instance
    }),
  );
  await app.listen(3000);
}
bootstrap();
