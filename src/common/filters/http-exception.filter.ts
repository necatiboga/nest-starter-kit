import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = null;

    /** Process for QueryFailedError */
    if (exception instanceof QueryFailedError) {
      if (exception.message.includes('duplicate key')) {
        if (exception.message.includes('Users_username_key')) {
          message = 'Username already exists';
        } else if (exception.message.includes('Users_email_key')) {
          message = 'Email already exists';
        } else {
          message = 'Duplicate key error';
        }
      }
    } else if (exception instanceof HttpException) {
      /** Process for HttpException */
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      message = exception.message;
      error =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : (exceptionResponse as any).message;
    }
    response.status(status).json({
      statusCode: status,
      message: message,
      data: null,
      error: error || message,
    });
  }
}
