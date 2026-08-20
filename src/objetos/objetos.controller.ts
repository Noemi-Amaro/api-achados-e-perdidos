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
   @ApiOperation({
        summary: 'Cadastrar um novo objeto'
    })
    @ApiResponse({
        status: 201,
        description: 'Objeto cadastrado com sucesso'
    })
    @ApiResponse({
        status: 404,
        description: 'Não foi possível cadastrar o objeto'
    })

  criar(@Body() createObjetoDto: CreateObjetoDto) {
    return this.objetosService.criar(createObjetoDto);
  }
//------------------------------------------------------------------------
   //Definindo o endpoint GET/objetos
  @Get()
   @ApiOperation({
        summary: 'Retorna todos os objetos cadastrados'
    })
    @ApiResponse({
        status: 201,
        description: 'Lista de objetos retornados com sucesso'
    })
    @ApiResponse({
        status: 404,
        description: 'Não foi possível retornar a lista de objetos'
    })
   listarTodos(){
        return this.objetosService.listarTodos();
    }

    //------------------------------------------------------------------
    // Define o endpoint GET/objetos/:id
     @Get(':id')
     @ApiOperation({
        summary: 'Localizarum objeto específico pelo ID'
    })
    @ApiResponse({
        status: 201,
        description: 'Objeto encontrado com sucesso'
    })
    @ApiResponse({
        status: 404,
        description: 'Objeto não encontrado'
    })
     buscaPorId(
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.objetosService.buscaPorId(id);
    }

    //------------------------------------------------------------------------

    // Define o endpoint PUT /objetos/:id
    @Put(':id')
     atualizar(
        @Param('id') id: number, @Body() dados:updateObjetoDto){
        return this.objetosService.atualizar(id, dados);
    }

    // Define o endpoint DELETE /objetos/:id
    @Delete(':id')
     remover(@Param('id') id:number){
            return this.objetosService.remover(id);

        }
};