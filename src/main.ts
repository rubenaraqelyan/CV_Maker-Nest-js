import * as dotenv from 'dotenv';
dotenv.config();
const { PORT } = process.env;
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as packageJson from '../package.json';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  const config = new DocumentBuilder()
    .setTitle('Generate CV')
    .setDescription('Generate CV apis')
    .setVersion(packageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(PORT || 4000);
}
bootstrap().then(() => console.info(`Server run PORT ${PORT}`));
