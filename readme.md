# Bi-Cycle Store B4A2V4

## Objective
I developed an Express application with TypeScript, integrating MongoDB with Mongoose to manage a **Bicycle Store**. I ensured data integrity using Mongoose schema validation.

---

## Features

1. **CRUD Operations:**
   - Create, Read, Update, and Delete operations for bicycles.
   - Order bicycles with inventory management.
2. **Search Functionality:**
   - Query bicycles by name, brand, or type.
3. **Revenue Calculation:**
   - Calculate total revenue from all orders using MongoDB aggregation.
4. **Error Handling:**
   - Validation errors, resource not found, and insufficient stock.

---

## Models

### Product Model (Bicycle)
- **Fields:**
  - `name`: The name of the bicycle.
  - `brand`: The brand of the bicycle.
  - `price`: Price of the bicycle.
  - `type`: The type of bicycle (e.g., Mountain, Road, Hybrid, BMX).
  - `description`: A brief description of the bicycle.
  - `quantity`: Quantity of the bicycle available.
  - `inStock`: Indicates if the bicycle is in stock.

### Order Model
- **Fields:**
  - `email`: The email address of the customer.
  - `product`: The bicycle ordered (MongoDB ObjectId).
  - `quantity`: The quantity of the ordered bicycle.
  - `totalPrice`: Total price of the order.

---

## Endpoints

### 1. Create a Bicycle
- **Endpoint:** `/api/products`
- **Method:** `POST`
- **Description:** Add a new bicycle to the inventory.

### 2. Get All Bicycles
- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Description:** Retrieve a list of all bicycles with optional search by type, name, or brand.

### 3. Get a Specific Bicycle
- **Endpoint:** `/api/products/:productId`
- **Method:** `GET`
- **Description:** Retrieve details of a specific bicycle by ID.

### 4. Update a Bicycle
- **Endpoint:** `/api/products/:productId`
- **Method:** `PUT`
- **Description:** Update details of a specific bicycle.

### 5. Delete a Bicycle
- **Endpoint:** `/api/products/:productId`
- **Method:** `DELETE`
- **Description:** Delete a specific bicycle from the inventory.

### 6. Order a Bicycle
- **Endpoint:** `/api/orders`
- **Method:** `POST`
- **Description:** Place an order for a bicycle, update inventory.

### 7. Calculate Revenue
- **Endpoint:** `/api/orders/revenue`
- **Method:** `GET`
- **Description:** Calculate total revenue from all orders.

---

## Error Response Structure
```json
{
  "message": "Error description",
  "success": false,
  "error": {
    "name": "ErrorType",
    "details": "Specific details about the error"
  },
  "stack": "Stack trace of the error (for debugging)"
}
```

---

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/bi-cycle-store.git
   cd bi-cycle-store
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   - Development mode:
     ```bash
     npm run start:dev
     ```
   - Production mode:
     ```bash
     npm run start
     ```

4. **Test API Endpoints:**
   I used Postman to test the API.

---

## Deployment

The application is deployed on Vercel:
- **Production URL:** [Bi-Cycle Store](https://bi-cycle-store-green.vercel.app/)
---

## Notes
- I ensured the API endpoints and response formats matched the specifications.
- I used meaningful commit messages and maintained a clean codebase.
