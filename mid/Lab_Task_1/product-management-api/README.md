# Lab Task 1: Product Management API

## Student details

- Name: **SAGAR BISWAS**
- Student ID: **22-47929-2**
- Section: **E**

## Requirements

- Node.js 20 or newer
- PostgreSQL
- Postman for API testing and screenshots

## Setup

1. Create a PostgreSQL database named `product_management_db`.
2. Copy `.env.example` to `.env` and set the local PostgreSQL password.
3. Install dependencies and start the API:

```powershell
npm install
npm run start:dev
```

The API runs at `http://localhost:3000`. In development, TypeORM creates or updates the two tables automatically. Do not use `synchronize` in production.

## Endpoints

### Products

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/products` | Create a product |
| GET | `/products` | Return all products |
| GET | `/products/:id` | Return one product |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

Product JSON:

```json
{
  "name": "Flipper Zero",
  "category": "Hardware Security",
  "price": 169,
  "quantity": 20
}
```

The product used for the submitted CRUD evidence was later updated to:

```json
{
  "name": "Flipper Zero Updated",
  "category": "Hardware Security",
  "price": 199.99,
  "quantity": 15
}
```

### Employees

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/employees` | Create an employee |
| GET | `/employees` | Return all employees |
| GET | `/employees/:id` | Return one employee |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

## Postman evidence

Use Postman with `http://localhost:3000` as the base URL and run the requests in order. Create `Flipper Zero` first, create a second product such as `WiFi Pineapple`, then perform the GET, PATCH, and DELETE requests using the ID returned for `Flipper Zero`. The final GET response should show the second product after `Flipper Zero` has been deleted.

Save screenshots in `screenshots/` with these exact names:

1. `01-create.png`
2. `02-get-all.png`
3. `03-get-by-id.png`
4. `04-update.png`
5. `05-confirm-update.png`
6. `06-delete.png`
7. `07-confirm-delete.png`

Each screenshot must show the method, full URL, response status, response body, and JSON body for POST/PATCH requests. The submitted screenshots show two products before deletion and the remaining second product after deletion.
