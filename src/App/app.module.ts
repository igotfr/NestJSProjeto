import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { ProdutosModule } from "../produtos/produtos.module";

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
      //entities: [UsersEntity],
    }),
    //TypeOrmModule.forFeature([UsersEntity]),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ProdutosModule
    //UsersModule
  ],
  /*controllers: [AppController],
  providers: [AppService],*/
})
export class AppModule {}