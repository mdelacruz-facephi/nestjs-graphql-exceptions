import { ArgumentsHost, Catch, HttpException } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
import { ApolloError, ValidationError } from "apollo-server-express";

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();

    let error: ApolloError;

    if (status < 400 && status > 499) {
      error = new ApolloError(
        exception.message,
        status.toString()
      );
    } else {
      error = new ValidationError(
        exception.message
      );
    }

    error.stack = exception.stack;
    error.extensions["response"] = exception.getResponse();

    throw error;
  }
}