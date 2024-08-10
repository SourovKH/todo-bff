import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(express.json());
  app.use(express.urlencoded());
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(8001);
}
bootstrap();
