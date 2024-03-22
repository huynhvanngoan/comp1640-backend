import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SeedsService } from './utils/seed-data.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seedsService = app.get(SeedsService);
  await seedsService.seed();

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
