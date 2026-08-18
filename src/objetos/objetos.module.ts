import { Module } from '@nestjs/common';
import { ObjetosService } from './objetos.service';
import { ObjetosController } from './objetos.controller';
import { DatabaseModule } from 'src/database/database.module';  //ok

@Module({
   imports: [DatabaseModule], // importação
  providers: [ObjetosService],
  controllers: [ObjetosController]
})
export class ObjetosModule {}
