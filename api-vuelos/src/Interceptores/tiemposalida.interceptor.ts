import {Injectable, CallHandler, ExecutionContext, NestInterceptor} from "@nestjs/common"
import {Observable, timeout} from 'rxjs'

@Injectable()
export class TiempoSalidaInterceptor implements NestInterceptor{
    intercept(
        context: ExecutionContext, 
        next: CallHandler<any>, 
        ): Observable<any> | Promise<Observable<any>>{
        return next.handle().pipe(timeout(12000))
    }
}
