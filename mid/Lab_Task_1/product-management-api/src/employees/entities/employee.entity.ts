import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 150 })
  name!: string;

  @Column({ length: 254, unique: true })
  email!: string;

  @Column({ length: 30 })
  phone!: string;

  @Column({ length: 100 })
  password!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "integer" })
  yearsOfWorking!: number;
}
