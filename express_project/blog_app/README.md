# Blog App with Authentication

This is a Node.js Express application with authentication functionality.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/blogDB
   JWT_SECRET=your_secure_jwt_secret_key_here
   ```

3. Start the server:
   ```
   npm start
   ```

## Authentication Endpoints

### Register a new user
```
POST /api/v2/auth/register
```

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2023-01-01T00:00:00.000Z"
  },
  "token": "jwt_token"
}
```

### Login
```
POST /api/v2/auth/login
```

Request body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2023-01-01T00:00:00.000Z"
  },
  "token": "jwt_token"
}
```

### Access Protected Routes

To access protected routes, include the JWT token in the Authorization header:

```
Authorization: Bearer your_jwt_token
```

Example protected route:
```
GET /api/v2/auth/profile
```

Response:
```json
{
  "success": true,
  "message": "You have access to this protected route",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2023-01-01T00:00:00.000Z"
  }
}
```

## Protecting Your Own Routes

To protect your own routes, use the `protect` middleware:

```javascript
const { protect } = require('../controller/authController');

router.get('/your-protected-route', protect, yourController);
```

For role-based access control, use the `restrictTo` middleware:

```javascript
const { protect, restrictTo } = require('../controller/authController');

router.delete('/admin-only-route', protect, restrictTo('admin'), adminController);
```

