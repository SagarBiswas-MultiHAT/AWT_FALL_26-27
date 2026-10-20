# AWT_FALL_26-27

## Repository Overview

This repository contains coursework, practice exercises, and NestJS projects for the Advanced Web Technologies(AWT) Fall 2026-27 course.

```text
AWT_FALL_26-27/
|-- README.md
`-- mid/
    |-- Lab_Task_0/
    |   `-- user-management/
    |       |-- src/
    |       |   |-- common/       Shared decorators, guards, helpers, pipes, schemas, and utilities
    |       |   |-- config/       Application and database configuration
    |       |   |-- database/     Database documentation and migrations
    |       |   |-- modules/      Feature modules, including the user module
    |       |   |-- providers/    Cache, database, and queue providers
    |       |   |-- script/       TypeORM migration and table-management scripts
    |       |   |-- app.module.ts NestJS root module
    |       |   |-- main.ts       Application bootstrap
    |       |   `-- seeder.ts     Database seeding entry point
    |       |-- screenshots/      Database and migration evidence screenshots
    |       |-- Dockerfile        Container image definition
    |       |-- docker-compose.yml Local service configuration
    |       |-- package.json      Project scripts and dependencies
    |       |-- pnpm-lock.yaml    Locked pnpm dependency versions
    |       `-- README.md         Lab Task 0 setup and migration instructions
    |
    |-- Lab_Task_1/
    |   |-- NestJS_Lab_Task_1.pdf Assignment requirements
    |   `-- product-management-api/
    |       |-- src/
    |       |   |-- products/     Product entity, DTOs, controller, service, and module
    |       |   |-- employees/    Employee entity, DTOs, controller, service, and module
    |       |   |-- app.module.ts Database and feature-module configuration
    |       |   `-- main.ts       NestJS application bootstrap and validation
    |       |-- screenshots/      Postman evidence for the required CRUD operations
    |       |-- .env.example      Sample local database configuration
    |       |-- package.json      Project scripts and dependencies
    |       |-- package-lock.json Locked npm dependency versions
    |       |-- README.md         Setup, endpoint, and submission instructions
    |       `-- tsconfig*.json    TypeScript and NestJS build configuration
    |
    `-- Practice/
        `-- Promise/
            |-- 1.)_promise.js   JavaScript Promise and async/await practice
            `-- README.md         Promise example execution instructions
```

## Main Projects

- **Lab Task 0:** A Docker-ready NestJS user-management project with PostgreSQL migrations and supporting providers.
- **Lab Task 1:** A PostgreSQL-backed NestJS REST API for product and employee CRUD operations.
- **Practice:** Small JavaScript and TypeScript learning exercises, including Promise and async/await examples.

Local-only files such as `.env`, `node_modules`, and `dist` are excluded from the repository and should not be committed.
