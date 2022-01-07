import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { StatusModule } from './status/status.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    StatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
