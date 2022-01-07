import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { Status } from './status.model';
import { handleResponse } from '../common/operators';

const API = 'https://httpbin.org/status';

@Injectable()
export class StatusService {
  constructor(private httpService: HttpService) {}

  async getWithoutFilter(code: number): Promise<Status> {
    const response = await this.httpService
      .get<Status>(`${API}/${code}`)
      .toPromise();

    return response.data;
  }

  async getWithFilter(code: number): Promise<Status> {
    const response$ = this.httpService
      .get<Status>(`${API}/${code}`)
      .pipe(handleResponse());

    return firstValueFrom(response$);
  }
}
