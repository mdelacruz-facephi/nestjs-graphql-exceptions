import { Args, Query, Resolver } from '@nestjs/graphql';

import { Status } from './status.model';
import { StatusService } from './status.service';

@Resolver((of) => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query((returns) => Status)
  async statusWithoutFilter(@Args('code') code: number): Promise<Status> {
    const status = await this.statusService.getWithoutFilter(code);
    return status;
  }

  @Query((returns) => Status)
  async statusWithFilter(@Args('code') code: number): Promise<Status> {
    const status = await this.statusService.getWithFilter(code);
    return status;
  }
}
