import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //This is to ensure that non addressed attributes are not piped to controller
      forbidNonWhitelisted: true, //This is to ensure that non addressed attributes are not piped to controller and is emitted as an error
      transform: true, //This is to ensure that returned entity from validation class is transformed into an instance of Validation class
    }),
  );
  // Swagger Configuration
  const config = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('Blog Application Api Documentation')
    .setDescription('Use the base url as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .addServer('http://localhost:3000')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
