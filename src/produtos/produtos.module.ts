import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

import { Produtos } from './entities/produtos.entity';
import { Produto } from './dto/produto.filter';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';

/*import { ProdutosService } from './produtos.service';
import { ProdutosResolver } from './produtos.resolver';*/

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Produtos])],
      resolvers: [{
        EntityClass: Produtos,
        DTOClass: Produto,
        CreateDTOClass: CreateProdutoInput,
        UpdateDTOClass: UpdateProdutoInput
      }]
    })
  ],
  providers: [/*ProdutosResolver, ProdutosService*/]
})
export class ProdutosModule {}