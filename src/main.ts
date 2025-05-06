import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Logger,
  ValidationPipe,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
    new TransformInterceptor(),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger yapılandırması
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('NestJS API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Refresh Token',
        in: 'header',
      },
      'refresh-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI özelleştirmesi
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // Token'ı localStorage'da sakla
    },
  });

  await app.listen(3000);
  logger.log('╔════════════════════════════════════════╗');
  logger.log('║           UYGULAMA DURUMU              ║');
  logger.log('╠════════════════════════════════════════╣');
  logger.log(`║ 🚀 Port: 3000                          ║`);
  logger.log(`║ 🌐 URL: http://localhost:3000          ║`);
  logger.log(`║ 📚 Swagger: http://localhost:3000/api  ║`);
  logger.log('╚════════════════════════════════════════╝');
}
bootstrap();
