import { IsString, IsIn, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from "@nestjs/swagger"; 

export class updateobjetoDto{

@IsString()
@IsOptional()
@ApiPropertyOptional({

    example: 'Garrafa',
    description: 'Novo nome para o objeto encontrado'
    }) 
nome?: string;

@IsString()
@IsOptional() 
@ApiPropertyOptional({
    example: 'Garrafa térmica azul com adesivos',
    description: 'Nova descrição para o objeto encontrado'
})   
descricao?: string;


@IsString()
@IsOptional()
@ApiPropertyOptional({
    example: 'Laboratório 3',
    description: 'Novo local onde o objeto foi encontrado'
    })
localEncontrado?: string;

@IsString()
@IsOptional()
@ApiPropertyOptional({
    example: '2023-10-01',
    description: 'Data onde o objeto foi encontrado'
    })
dataEncontrado?: Date;

@IsString()     
@IsIn(['ENCONTRADO', 'DEVOLVIDO'])
@IsOptional()
@ApiPropertyOptional({
    example: 'ENCONTRADO',
    description: 'Novo status do objeto encontrado'
    })      
status?: string;
}