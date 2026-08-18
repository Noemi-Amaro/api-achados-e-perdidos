import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; //ok
import { createPool, Pool } from 'mysql2/promise'; // Decorators para a criação do banco de dados

@Injectable()
export class DatabaseService {
    // O Pool gerencia um conjunto de conexões com o banco.
    private readonly pool: Pool;

    //O constructor é um injetor de dependência, logo, ele está buscando as variáveis do arquivo .env para que possamos criar a conexão
    constructor(private readonly configService: ConfigService) {
        this.pool = createPool({
            // estamos inserindo os dados para a criação da conexão do banco de dados 
            // com base nas vari´paveis que criamos no arquivo .env através do configService
            host: this.configService.get<string>('DB_HOST'),
            // Usamos o "Number" neste caso, ´pois todas as variáveis do .env são lidas como texto, assim,transformamos a porta em numero.
            port: Number(this.configService.get<string>('DB_PORT')),
            user: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),

        })
    }

         // Método genérico que poderá ser utilizado pelos services para executar comandos SQL ( como INSERT, DELETE, etc)
    async query(sql: string, valores: any[] = []){
        // Executa o comando SQL com os valores recebidos.
        const [resultado] = await this.pool.execute(sql, valores);
        // Retorna o resultado da consulta.
        return resultado;
    }
}
//OBS: esse genérico é um padrão, como se fosse um esquele, depois pode ser reecrito de acordo com que vamos precisar.
