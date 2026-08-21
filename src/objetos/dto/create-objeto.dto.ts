import { IsNotEmpty, IsString, IsIn, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateObjetoDto {
  @IsNotEmpty() // O nome do objeto não pode estar vazio.
  @IsString()
  @ApiProperty({
    example: 'Garrafa',
    description: 'Nome do objeto encontrado'
    })
  nome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Garrafa térmica azul com adesivos',
    description: 'Descrição do objeto encontrado'
  })
  descricao: string;

  @IsOptional()
  @IsString()
    @ApiProperty({
    example: 'Laboratório 3',
    description: 'Local onde o objeto foi encontrado'
    })
  localEncontrado: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '2023-10-01',
    description: 'Data onde o objeto foi encontrado'
  })                                
  dataEncontrado: Date;

 @IsNotEmpty() // O status é obrigatório
 @IsIn(['ENCONTRADO', 'DEVOLVIDO']) // O status deve ser ENCONTRADO ou DEVOLVIDO.
    @ApiProperty({
    example: 'ENCONTRADO',
    description: 'Status do objeto encontrado'
  })
  status: string;

}