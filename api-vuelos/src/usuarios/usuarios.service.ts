import { HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioDTO } from './dto/usuario.dto';
import { IUsuarios } from 'src/common/Interfaces/usuarios.interface';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USUARIO } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {
    constructor(@InjectModel(USUARIO.name) private readonly modelo:Model<IUsuarios>){}

    async hashPassword(password: string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
    async insertar(usuarioDTO:UsuarioDTO):Promise<IUsuarios>{
        const hash = await this.hashPassword(usuarioDTO.password);
        const newusuario = new this.modelo({...usuarioDTO,password:hash});
        return newusuario.save();
    }

    async todos():Promise<IUsuarios[]>{
        return await this.modelo.find();
    }

    async uno(id:string):Promise<IUsuarios>{
        return await this.modelo.findById(id);
    }

    async actualizar(id:string, usuarioDTO:UsuarioDTO):Promise<IUsuarios>{
        const hash = await this.hashPassword(usuarioDTO.password);
        const usuario = new this.modelo({...usuarioDTO,password:hash});
        return await this.modelo.findByIdAndUpdate(id, usuarioDTO, {new: true});
    }

    async eliminar(id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status: HttpStatus.OK, msg: 'Se eliminó correctamente'};
    }
}
