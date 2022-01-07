import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'status' })
export class Status {
  @Field()
  code: string;

  @Field({ nullable: true })
  message?: string;
}
