import * as dotenv from 'dotenv';
dotenv.config();
const { NODE_ENV, PORT, BASE_URL, BASE_API_URL } = process.env;
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as packageJson from '../package.json';
import { join } from 'path';
const SWAGGER_URL = 'api/docs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  app.useStaticAssets(join(__dirname, '..', '..', './dist', 'public'));
  app.useStaticAssets(join(__dirname, '..', '..', 'web'));
  const config = new DocumentBuilder()
    .setTitle('Generate CV')
    .setDescription('Generate CV apis')
    .setVersion(packageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_URL, app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(PORT || 4000);
}
bootstrap().then(() => console.info(`
WELCOME TO CV MAKER ${NODE_ENV.toUpperCase()}
SERVER RUN PORT: ${PORT}
BASE API URL: ${BASE_API_URL}
SWAGGER URL:  ${BASE_URL+'/'+SWAGGER_URL}`));