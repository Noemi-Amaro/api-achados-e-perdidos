import { IsString, IsIn, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from "@nestjs/swagger"; 

export class updateObjetoDto{

@IsString()
@IsOptional()
@ApiPropertyOptional({
        example: 'Garrafa',
        description: 'Nome do objeto encontrado'
    }) 
nome?: string;

@IsString()
@IsOptional() 
@ApiPropertyOptional({
        example: 'Garrafa térmica azul com adesivos',
        description: 'Descrição do objeto encontrado'
    })   
descricao?: string;


@IsString()
@IsOptional()
@ApiPropertyOptional({
        example: 'Laboratório 3',
        description: 'Local onde o objeto foi encontrado'
    })
localEncontrado?: string;

@IsString()     
@IsIn(['ENCONTRADO', 'DEVOLVIDO'])
@IsOptional()
@ApiPropertyOptional({
        example: 'ENCONTRADO',
        description: 'Status do objeto encontrado'
    })      
status?: string;
}