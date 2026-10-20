import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 150 })
  name!: string;

  @Column({ length: 100 })
  category!: string;

  @Column({ type: "numeric", precision: 12, scale: 2 })
  price!: number;

  @Column({ type: "integer" })
  quantity!: number;
}
