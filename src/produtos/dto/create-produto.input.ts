import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProdutoInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  qtd: number;
}