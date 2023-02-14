import mongoose from "mongoose";

export const PasajeroSchema = new mongoose.Schema({
        nombres: {type: String, require: true},
        apellidos: {type: String, require: true},
        identificacion: {type: String, require: true},
        edad: {type: Number, require: true},
        numeroVuelo: {type: Number, require: true},
    },
        {
            timestamps:true
        }
);

PasajeroSchema.index({identificacion:1},{unique:true});