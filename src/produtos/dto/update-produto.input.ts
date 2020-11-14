import { PartialType } from '@nestjs/mapped-types';
import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProdutoInput {
  @Field(() => String, { description: "name", nullable: true })
  name?: string;

  @Field(() => String, { description: "description", nullable: true })
  description?: string;

  @Field(() => Int, { description: "quantity", nullable: true })
  qtd?: number;
}