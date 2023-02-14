export interface IVuelo extends Document{
    numeroVuelo: number;
    piloto: string;
    aerolinea: string;
    destino: string;
    fecha: string;
    horaSalida: string;
    horaLlegada: string;
    tipoAvion: string;
}