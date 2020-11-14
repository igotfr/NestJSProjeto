import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLISODateTime, ID, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Produto {
  @FilterableField(() => ID, { description: "id" })
  id: number;

  @FilterableField(() => String, { description: "name" })
  name: string;

  @FilterableField(() => String, { description: "description" })
  description: string;

  @FilterableField(() => Int, { description: "quantity" })
  qtd: number;

  @FilterableField(() => GraphQLISODateTime, { description: "createdAt" })
  createdAt: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt: Date;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  deletedAt?: Date;
}