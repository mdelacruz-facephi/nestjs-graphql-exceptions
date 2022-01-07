import { HttpException } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

export function handleResponse() {
  return function<T>(source: Observable<AxiosResponse<T>>) {
    return source.pipe(
      map(({ data }) => data),
      catchError(error => {
        throw new HttpException(
          error.response.statusText,
          error.response.status
        )
      })
    );
  } 
}