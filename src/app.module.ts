import { Module } from '@nestjs/common';
import { ObjetosModule } from './objetos/objetos.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';  //ok

@Module({
  // Aqui serão refistrados os módulos utilizados pela aplicação
  imports: [
    // Torna visível para toda a aplicação as variáveis presentes no .env.example
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    ObjetosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
