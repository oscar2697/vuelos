import { HttpStatus, Injectable } from '@nestjs/common';
import { PasajeroDTO } from './dto/pasajero.dto';
import { IPasajero } from 'src/common/Interfaces/pasajeros.interface';
import { InjectModel } from '@nestjs/mongoose';
import { PASAJERO } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class PasajerosService {
    constructor(@InjectModel(PASAJERO.name) private readonly modelo: Model<IPasajero>){}

    async insertar(pasajeroDTO:PasajeroDTO):Promise<IPasajero>{
        const newpasajero = new this.modelo({...pasajeroDTO});
        return newpasajero.save(); 
    }

    async todos():Promise<IPasajero[]>{
        return await this.modelo.find();
    }

    async uno(id:string):Promise<IPasajero>{
        return await this.modelo.findById(id);
    }

    async actualizar (id:string, pasajeroDTO:PasajeroDTO):Promise<IPasajero>{
        const pasajero = new this.modelo({...pasajeroDTO});
        return await this.modelo.findByIdAndUpdate(id, pasajeroDTO,{new: true});
    }

    async eliminar (id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg: "Se eliminó correctamente"};
    }
}
