import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class VueloDTO{
    @IsNotEmpty()
    @IsNumber()
    readonly numeroVuelo: number;
    @IsNotEmpty()
    @IsString()
    readonly piloto: string;
    @IsNotEmpty()
    @IsString()
    readonly aerolinea: string;
    @IsNotEmpty()
    @IsString()
    readonly destino: string;
    @IsNotEmpty()
    @IsString()
    readonly fecha: string;
    @IsNotEmpty()
    @IsString()
    readonly horaSalida: string;
    @IsNotEmpty()
    @IsString()
    readonly horaLlegada: string;
    @IsNotEmpty()
    @IsString()
    readonly tipoAvion: string;
}