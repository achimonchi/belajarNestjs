import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { EntityNotFoundError } from "typeorm";

@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
    catch(error: EntityNotFoundError, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        const status = HttpStatus.NOT_FOUND;
        response.status(status).json({
            statusCode: status,
            message : "Not found !"
        })
    }
}