import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

export class TodasExcepciones implements ExceptionFilter{
    private readonly logger = new Logger(TodasExcepciones.name)

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const request = ctx.getRequest()

        const status = 
        exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

        const msg = exception instanceof HttpException ? exception.getResponse( ) : exception

        this.logger.error(`Status:${status} Error:${JSON.stringify(msg)}`)

        response.status(status).JSON({
            time: new Date().toISOString(),
            path: request.url,
            error: msg,
        }
        )
    }
}