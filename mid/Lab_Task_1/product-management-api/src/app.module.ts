import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./employees/entities/employee.entity";
import { EmployeesModule } from "./employees/employees.module";
import { Product } from "./products/entities/product.entity";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: "postgres",
        host: config.get<string>("DB_HOST", "localhost"),
        port: config.get<number>("DB_PORT", 5432),
        username: config.get<string>("DB_USERNAME", "postgres"),
        password: config.get<string>("DB_PASSWORD", ""),
        database: config.get<string>("DB_DATABASE", "product_management_db"),
        entities: [Product, Employee],
        synchronize: config.get("NODE_ENV") !== "production",
      }),
    }),
    ProductsModule,
    EmployeesModule,
  ],
})
export class AppModule {}
