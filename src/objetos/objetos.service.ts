import { Injectable,NotFoundException} from '@nestjs/common';
import { ResultSetHeader, RowDataPacket } from 'mysql2'; // ter retorno do banco de dados, confirmação (recurso da bd)
import { DatabaseService } from 'src/database/database.service';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { updateObjetoDto } from './dto/update-objeto.dto';

@Injectable()
export class ObjetosService {
constructor (private readonly databaseService: DatabaseService){}

   async criar  (createObjetoDto: CreateObjetoDto) {
   const { nome, descricao, localEncontrado, dataEncontrado, status} = createObjetoDto; // Aqui estamos desestruturando o DTO para que nós recebamos os valores
   
     // O comando SQL que fará a inserção das informações no nosso banco de dados
        const sql = `
        INSERT INTO objetos (
        nome, descricao, localEncontrado, dataEncontrado, status
        )
        VALUES (?, ?, ?, ?, ?)
        `;

        // Executa o INSERT  e informa para nós o tipo esperado do resultado
        const resultado = await this.databaseService.query(sql, [
            nome, descricao, localEncontrado, dataEncontrado, status
        ]) as ResultSetHeader;

        // Retorna uma resposta mais amigável para o usuário de confirmação
        return {
            mensagem: 'Objeto cadastrado com sucesso',
            objetos: {
                // O insertId contém o ID gerado pelo banco com o auto incremento
                id: resultado.insertId,
                nome,
                descricao,
                localEncontrado,
                dataEncontrado,
                status
            }
};
   }

  // O objetivo dessa função será a exibição de todos os objetos cadastrados
    async listarTodos(){
        // A constante resultado terá armazenado todos os objetos cadastrados na tabela 'objetos' do banco de dados.
        const resultado = await this.databaseService.query(
            'SELECT * FROM objetos'
        ) as RowDataPacket[];
        if(resultado.length === 0){
            throw new NotFoundException('Nenhum objeto encontrado');
        }
        return resultado;
    }

    // Realizará a busca de um objeto através do ID gerado pelo banco de dados.
    async buscaPorId(id: number){
        // Executa uma consulta no banco de dados, buscando o objeto que possui o ID informado.
        const resultado = await this.databaseService.query(
            'SELECT * FROM objetos WHERE id= ? ', [id]
        ) as RowDataPacket[];
    }
         // Essa função será responsável por realizar a atualização dos objetos já cadastrados no banco de dados
    async atualizar(id: number, dados: updateObjetoDto){
        // Antes de realizar a atualização, buscamos o livro pelo ID.
        //Caso o livro não exista, o método 'buscarPorId' já lança a exceção NotFound
        await this.buscaPorId(id);
    // Os sinais de ? representados nos valores que serão enviados no array logo abaixo
        await this.databaseService.query(
            'UPDATE objetos SET nome = ?, descricao = ?, localEncontrado = ?, dataEncontrado = ?, status = ? WHERE id = ?',

             [dados.nome, dados.descricao, dados.localEncontrado, dados.dataEncontrado, dados.status, id]
        );
        // Se a atualização foi bem sucedida, o usuário visualizará a mensagem
        return {
            mensagem: 'Objeto atualizado com sucesso'
        };
    }

     // Função responsável por deletar um objeto cadastrado no banco de dados
    async remover(id:number){

        // Ante de realizar a exclusão, buscamos o objeto pelo ID.
        // caso não seja encontrado, a função 'buscaPorId' já exibe a exceção NotFound
        await this.buscaPorId(id);

        //Executa o comando SQL de deleção.
        await this.databaseService.query(
            'DELETE FROM objetos WHERE id = ?', [id]
        );
    

        // Localizado o ID, feita a exclusão do banco, o usuário visualizará a confirmação
        return {
            mensagem: 'Objeto excluído com sucesso'
        };

    }
}

