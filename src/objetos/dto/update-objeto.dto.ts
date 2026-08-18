import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class updateObjetoDto{

@IsString()
nome?: string;
}
