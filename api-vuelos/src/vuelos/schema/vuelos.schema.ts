import mongoose from "mongoose";

export const VueloSchema = new mongoose.Schema({
    numeroVuelo: {type: Number, require:true},
    piloto: {type: String, require: true},
    aerolinea: {type: String, require: true},
    destino: {type: String, require: true},
    fecha: {type: String, require: true},
    horaSalida: {type: String, require: true},
    horaLlegada: {type: String, require: true},
    tipoAvion: {type: String, require: true},
},
{
    timestamps:true
}
);

VueloSchema.index({numeroVuelo:1},{unique:true});
