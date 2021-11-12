import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('Api for getting text for the webpage')
    .setVersion('1.0')
    .addTag('Portfolio API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000, function () {
    console.log('Express server listening on port %d', process.env.PORT);
  });
}
bootstrap();
