import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class CreateObjetoDto {
  @IsNotEmpty() // O nome do objeto não pode estar vazio.
  @IsString()
  nome!: string;

  @IsNotEmpty()
  @IsString()
  descricao!: string;

  @IsNotEmpty()
  @IsString()
  localEncontrado!: string;

  @IsNotEmpty()
  @IsString()
  dataEncontrado!: Date;

 @IsNotEmpty() // O status é obrigatório
 @IsIn(['ENCONTRADO', 'DEVOLVIDO']) // O status deve ser ENCONTRADO ou DEVOLVIDO.
  status!: string;

}