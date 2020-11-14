import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity } from "typeorm";

@Entity("Produtos")
export class Produtos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  qtd: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}