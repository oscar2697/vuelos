import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PasajeroDTO{
    @IsNotEmpty()
    @IsString()
    readonly nombres: string;
    @IsNotEmpty()
    @IsString()
    readonly apellidos: string;
    @IsNotEmpty()
    @IsString()
    readonly identificacion: string;
    @IsNotEmpty()
    @IsNumber()
    readonly edad: number;
    @IsNotEmpty()
    @IsNumber()
    readonly numeroVuelo: number;
}