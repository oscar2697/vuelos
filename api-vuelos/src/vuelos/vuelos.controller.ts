import { Body, Controller, Delete, Post, Get, Param, Put } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VueloDTO } from './dto/vuelo.dto';

@Controller('api/v1/vuelos')
export class VuelosController {
    constructor(private readonly vueloServicio:VuelosService){}

        @Post()
        insertar(@Body() vueloDTO:VueloDTO){
            return this.vueloServicio.insertar(vueloDTO);
        }
        
        @Get()
        todos(){
            return this.vueloServicio.todos();
        }

        @Get(':id')
        uno(@Param('id') id:string){
            return this.vueloServicio.uno(id);
        }

        @Put(':id')
        actualizar(@Param('id') id:string, @Body() vueloDTO:VueloDTO){
            return this.vueloServicio.actualizar(id, vueloDTO);
        }

        @Delete(':id')
        eliminar(@Param('id') id:string){
            return this.vueloServicio.eliminar(id);
        }
}
