import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VuelosModule } from './vuelos/vuelos.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['.env.development'],
      isGlobal:true
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB

    ),
    UsuariosModule,
    VuelosModule,
    PasajerosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
