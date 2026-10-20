# Lab Task 0 - Complete Processes for User Management

## Setup

### Step 1: Install Dependencies

```powershell
pnpm install
```

## Step 2: Create and Configure the .env File

```env
# Server Configuration
PORT=5000
NODE_ENV=development
NODE_DB_ENV=development
APP_ENV=local
JWT_BEARER_SECRET="mysecretjwtkey1234567890"

# PostgreSQL Database Configuration
DB_CLIENT="postgres"
DB_HOST="localhost"
DB_PORT=5432
DB_USER="postgres"
DB_PASSWORD="postgres_password"
DB_DATABASE="user_management_db"

# Redis Configuration (defaults)
REDIS_HOST="localhost"
REDIS_PORT=6379

# Mailer Configuration (dummy values to pass validation)
MAILER_HOST="smtp.example.com"
MAILER_PORT=587
MAILER_SECURE=false
MAILER_USER="user@example.com"
MAILER_PASSWORD="password"
MAILER_FROM="no-reply@example.com"
```

> I replaced the "postgres_password" with the password I set when installing PostgreSQL.

### Step 3: Create the Database in PostgreSQL

Before running migrations, the database specified in .env must exist.

#### Using pgAdmin 4

1. Open pgAdmin 4.
2. Connect to the PostgreSQL server.
3. Right-click on Databases -> Create -> Database...
4. Enter user_management_db as the Database name and click Save.

### Step 4: Add the Three User Tables to the Migration File

1775500022201- create-user-table.ts

```typescript
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1775500022201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Ensure UUID generation function is available in PostgreSQL
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    // 1. Table: students
    await queryRunner.createTable(
      new Table({
        name: "students",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "department",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
        ],
      }),
    );

    // 2. Table: teachers
    await queryRunner.createTable(
      new Table({
        name: "teachers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "designation",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
        ],
      }),
    );

    // 3. Table: admins
    await queryRunner.createTable(
      new Table({
        name: "admins",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "role",
            type: "varchar",
            default: "'superadmin'",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop tables in reverse order
    await queryRunner.dropTable("admins");
    await queryRunner.dropTable("teachers");
    await queryRunner.dropTable("students");
  }
}
```

### Step 5: Run the Migration

```powershell
npm run migration:run
```

---

## Verify in PostgreSQL and Screenshots (proof of works)

1. Screenshot 1 (Migration Execution Output):

![Migration Execution Output](<screenshots/1.0)_Screenshot_1_(Migration_Execution_Output).png>)

2. Screenshot 2 (Migration Code):

![students](<screenshots/2.1)_Screenshot_2_(Migration_Code)-students.png>)

![teachers](<screenshots/2.2)_Screenshot_2_(Migration_Code)-teachers.png>)

![admins](<screenshots/2.3)_Screenshot_2_(Migration_Code)-admins.png>)

3. Screenshot 3 (Database Tables in pgAdmin)

![Database Tables in pgAdmin](<screenshots/3.0)_Screenshot_3_(Database_Tables_in_pgAdmin).png>)

4. Screenshot 4 (Columns view or Query)

![Columns view or Query](<screenshots/4.0)_Screenshot_4_(Columns_view_or_Query).png>)

---
