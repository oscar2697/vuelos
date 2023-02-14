import { HttpStatus, Injectable } from '@nestjs/common';
import { VueloDTO } from './dto/vuelo.dto';
import { IVuelo } from 'src/common/Interfaces/vuelos.interface';
import { InjectModel } from '@nestjs/mongoose';
import { VUELO } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class VuelosService {
    constructor(@InjectModel(VUELO.name) private readonly modelo:Model<IVuelo>){}


    async insertar(vueloDTO:VueloDTO):Promise<IVuelo>{
        const newvuelo = new this.modelo({...vueloDTO});
        return newvuelo.save();
    }

    async todos():Promise<IVuelo[]>{
        return await this.modelo.find();
    }

    async uno(id:string):Promise<IVuelo>{
        return await this.modelo.findById(id);
    }

    async actualizar(id:string, vueloDTO:VueloDTO):Promise<IVuelo>{
        const vuelo = new this.modelo({...vueloDTO});
        return await this.modelo.findByIdAndUpdate(id, vueloDTO, {new: true});
    }

    async eliminar (id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg: 'Se eliminó correctamente'};
    }

}
