import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = 3000;
const PREFIX = '/v1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.setGlobalPrefix(PREFIX, {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });

  const config = new DocumentBuilder()
    .setTitle('경로당 Server API')
    .setDescription('경로당 API 명세서')
    .setVersion('Dev_1.0')
    .build();

  const swagger = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, swagger);

  await app.listen(PORT);

  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
