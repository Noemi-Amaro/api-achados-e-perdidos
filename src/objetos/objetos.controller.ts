import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException,ParseIntPipe } from '@nestjs/common';
import { ObjetosService } from './objetos.service';
import { CreateObjetoDto} from './dto/create-objeto.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

ApiTags('Objetos')
@Controller('objetos')
export class ObjetosController {
  constructor(private readonly objetosService: ObjetosService) {}

  //Definindo o endpoint POST/objetos
  @Post()
  cadastrar(@Body() createObjetoDto: CreateObjetoDto) {
    return this.objetosService.cadastrar(createObjetoDto);
  }

   //Definindo o endpoint GET/objetos
  @Get()
   listarTodos(){
        return this.objetosService.listarTodos();
    }

    // Define o endpoint GET/objetos/:id
     @Get(':id')
     buscaPorId(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.objetosService.buscaPorId(id);
    }

    // Define o endpoint PUT objetos/:id
    @Put(':id')
     atualizar(
        @Param('id') id: number, @Body() dados:updateobjetoDto){
        return this.objetosService.atualizar(id, dados);
    }

    // Define o endpoint DELETE /objetos/:id
    @Delete(':id')
     remover(@Param('id') id:number){
            return this.objetosService.remover(id);

        }
};