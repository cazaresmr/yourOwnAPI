# My API Project

This API allows users to interact with a database of characters, providing endpoints for CRUD operations and logging each request.

## Base URL

```
http://localhost:5001/api
```

## Endpoints

### Characters

#### Get All Characters

- **URL**: `/characters`
- **Method**: `GET`
- **Description**: Fetches all characters from the database.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Jay Gatsby",
      "description": "A wealthy and mysterious man known for throwing extravagant parties at his mansion."
    },
    {
      "id": 2,
      "name": "Nick Carraway",
      "description": "The novel's narrator and a young man from Minnesota who rents a house next to Gatsby."
    },
    ...
  ]
  ```

#### Get Character by ID

- **URL**: `/characters/:id`
- **Method**: `GET`
- **Description**: Fetches a specific character by ID from the database.
- **URL Parameters**:
  - `id` (required): The ID of the character.
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Jay Gatsby",
    "description": "A wealthy and mysterious man known for throwing extravagant parties at his mansion."
  }
  ```

#### Create a New Character

- **URL**: `/characters`
- **Method**: `POST`
- **Description**: Inserts a new character into the database.
- **Request Body**:
  ```json
  {
    "name": "New Character",
    "description": "Description of the new character."
  }
  ```
- **Response**:
  ```json
  {
    "id": 3,
    "name": "New Character",
    "description": "Description of the new character."
  }
  ```

#### Update an Existing Character

- **URL**: `/characters/:id`
- **Method**: `PUT`
- **Description**: Updates an existing character in the database.
- **URL Parameters**:
  - `id` (required): The ID of the character.
- **Request Body**:
  ```json
  {
    "name": "Updated Character",
    "description": "Updated description."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "Updated Character",
    "description": "Updated description."
  }
  ```

#### Delete an Existing Character

- **URL**: `/characters/:id`
- **Method**: `DELETE`
- **Description**: Deletes an existing character from the database.
- **URL Parameters**:
  - `id` (required): The ID of the character.
- **Response**:
  ```json
  {
    "message": "Character deleted successfully."
  }
  ```

### Requests

#### Get All Requests

- **URL**: `/requests`
- **Method**: `GET`
- **Description**: Fetches all requests made to the server.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "method": "GET",
      "endpoint": "/api/characters",
      "timestamp": "2024-07-01T12:34:56Z"
    },
    {
      "id": 2,
      "method": "POST",
      "endpoint": "/api/characters",
      "timestamp": "2024-07-01T12:35:01Z"
    },
    ...
  ]
  ```

## Error Handling

### 404 Not Found

- **Response**:
  ```json
  {
    "error": "Not Found"
  }
  ```

### 500 Internal Server Error

- **Response**:
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

## Example Requests

### Get All Characters

```bash
curl -X GET http://localhost:5001/api/characters
```

### Get Character by ID

```bash
curl -X GET http://localhost:5001/api/characters/1
```

### Create a New Character

```bash
curl -X POST http://localhost:5001/api/characters \
-H "Content-Type: application/json" \
-d '{
  "name": "New Character",
  "description": "Description of the new character."
}'
```

### Update an Existing Character

```bash
curl -X PUT http://localhost:5001/api/characters/1 \
-H "Content-Type: application/json" \
-d '{
  "name": "Updated Character",
  "description": "Updated description."
}'
```

### Delete an Existing Character

```bash
curl -X DELETE http://localhost:5001/api/characters/1
```

### Get All Requests

```bash
curl -X GET http://localhost:5001/api/requests
```

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourrepository.git
   cd yourrepository
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your database credentials:

   ```
   PORT=5001
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=password
   DB_SCHEMA=mydatabase
   ```

4. Start the server:
   ```bash
   node server.js
   ```
