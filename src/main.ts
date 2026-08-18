import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 // Ativa a validação dos DTOs em toda a aplicação.
  app.useGlobalPipes(
    new ValidationPipe({
      // Remove a propriedade que não existe no DTO
      whitelist: true,
      // Retorna o erro quando uma propriedade desconhecida é enviada.
      forbidNonWhitelisted: true,
      // Tenta transformar os valores recebidos para os tipos esperados pela aplicação
      transform: true,
    })
  );

  // Trecho que fará nossa API ser documentada.
  const config = new DocumentBuilder()
  .setTitle('API Achados e Perdidos')
  .setDescription('API para gerenciamento de achados e perdidos')
  .setVersion('1.0')
  .build();
const documento = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api_achados_perdidos', app, documento);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
