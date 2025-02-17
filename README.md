# Gym Class Scheduling and Membership Management System

## Project Overview
The **Gym Class Scheduling and Membership Management System** is designed to efficiently manage gym operations. This system defines three roles: **Admin, Trainer, and Trainee**, each with specific permissions.

### Key Features:
- **Admin:**
  - Create and manage trainers.
  - Schedule up to 5 classes per day.
  - Assign trainers to schedules.
- **Trainer:**
  - View assigned class schedules.
  - Cannot create new schedules or manage trainee profiles.
- **Trainee:**
  - Create and manage their profiles.
  - Book available class schedules (max 10 trainees per class).
  - Cancel their bookings if needed.

## Technology Stack
- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Architecture:** Modular pattern

## Relational Diagram
[Click here to view the Relational Diagram](#) *([Upload the diagram and provide the link here.](https://drive.google.com/file/d/1kP5eP7Wni_NJLCWvLWjo7nwW9S1gF69C/view?usp=sharing))*

## Live Deployed Link
[Gym Management API Live](#) *([Provide the deployed server link here.](https://gym-management-backend-nu.vercel.app/))*

## Admin Credentials
```
{
  "email": "mdmehedihasanmehad@gmail.com",
  "password": "MehediMehad"
}
```

## API Endpoints

### 1. Crete Trainer

**POST**  `/api/user/crete-trainer`
**Headers**: `Authorization` : `Bearer {{admin-token}}`

**Request Body:**

```json
{
    "name": "Rohan",
    "gender": "male",
    "email": "rohan@example.com",
    "contactNo": "+8801712345678",
    "password":"12345678"
}
```

**Response:**
```json
{
    "success": true,
    "statusCode": 200,
    "message": "Trainer is created successfully!",
    "data": [
      {
        ...data
      }
    ]
}
```

### 2. Crete Trainee
**POST**  `/api/user/crete-trainee`
**Request Body:**

```json
{
    "name": "Raju",
    "gender": "male",
    "email": "raju@example.com",
    "contactNo": "+8801712345678",
    "password":"12345678"
}
```

### 3. Login User

**POST** `/api/auth/login`

**Description:** Authenticates a user with their email and password and generates a JWT token.

**Request Body:**

```json
{
    "email": "john@example.com",
    "password": "securepassword"
}
```

**Response:**

-   **Success (200):**

```json
{
    "success": true,
    "message": "Login successful",
    "statusCode": 200,
    "data": {
        "token": "string"
    }
}
```


### 4 Create-Schedule

**POST** `/api/admin/create-schedule`

**Request Header:**`Authorization: Bearer <token>`

**Request Body:**

```json
{
    "date": "16-02-2025",
    "startTime": "04:00",
    "endTime": "06:00",
    "trainerId": "67b1dc78612d9e42d02ccefe",
    "capacity": 10
}
```

**Response:**

-   **Success (201):**

```json
{
    "success": true,
    "statusCode": 201,
    "message": "Schedule created successfully",
    "data": {
        "date": "16-02-2025",
        "startTime": "08:00",
        "endTime": "10:00",
        "trainerId": "67b1dc78612d9e42d02ccefe",
        "capacity": 10,
        "trainees": [],
        "_id": "67b3360024f9a1f58f050345",
        "createdAt": "2025-02-17T13:13:36.987Z",
        "updatedAt": "2025-02-17T13:13:36.987Z",
        "__v": 0
    }
}
```
### 5 Get All Schedule

**GET** `/api/schedule`

**Request Header:**`Authorization: Bearer <token>`
**Response:**
```json
{
    "success": true,
    "statusCode": 200,
    "message": "All schedules retrieved successfully",
    "data": [
        {
            "_id": "67b2ec4e7112474d9f635429",
            "date": "16-02-2025",
            "startTime": "04:00",
            "endTime": "06:00",
            "trainerId": "67b1dc78612d9e42d02ccefe",
            "capacity": 10,
            "trainees": [
                "67b2e96e7112474d9f635418"
            ],
            "createdAt": "2025-02-17T07:59:10.737Z",
            "updatedAt": "2025-02-17T12:03:54.452Z",
            "__v": 5
        },
    ]
}
```
### 
#### Trainer 

**GET** `/api/trainer/my-schedules`

**Request Header:**`Authorization: Bearer <token>`

**Response:**
```json
{
    "success": true,
    "statusCode": 200,
    "message": "Schedules is retrieved successfully.",
    "data": [
        {
            "_id": "67b3483ca7481e4be74ecbb2",
            "date": "16-02-2025",
            "startTime": "22:00",
            "endTime": "24:00",
            "trainerId": {
                "_id": "67b346eda7481e4be74ecb92",
                "name": "mehedi",
                "email": "mehedi@example.com",
                "id": "67b346eda7481e4be74ecb92"
            },
            "capacity": 10,
            "trainees": [],
        }
    ]
}
```
### 5 Get All Trainer

**GET** `/api/trainer`

**Request Header:**`Authorization: Bearer <admin-token>`
**Response:**
```json
{
    "success": true,
    "statusCode": 200,
    "message": "All Trainer retrieved successfully",
    "data": [
        {
            "_id": "67b2e8573321399c707fd4ea",
            "user": "67b2e8573321399c707fd4e5",
            "name": "Rohan",
            "gender": "male",
            "email": "rohan@example.com",
            "contactNo": "+8801712345678",
            "assignedClasses": [],
            "createdAt": "2025-02-17T07:42:15.768Z",
            "updatedAt": "2025-02-17T07:42:15.768Z",
            "__v": 0,
            "id": "67b2e8573321399c707fd4ea"
        },
    ]
}
```
### Trainee
#### Book a Class Schedule 

**POST** `/api/trainee/book-class`

**Request Header:**`Authorization: Bearer <token>`

**Request Body:**

```json
 {
     "classScheduleId":"67b2ec4e7112474d9f635429"
 }
```
**Response:**
```json
{
    "success": true,
    "statusCode": 200,
    "message": "Class booked successfully",
    "data": {
        "_id": "67b3360024f9a1f58f050345",
        "date": "16-02-2025",
        "startTime": "08:00",
        "endTime": "10:00",
        "trainerId": null,
        "capacity": 10,
        "trainees": [
            "67b2e96e7112474d9f635418"
        ],
        "createdAt": "2025-02-17T13:13:36.987Z",
        "updatedAt": "2025-02-17T14:39:58.014Z",
        "__v": 1
    }
}
```
#### Cancel Booking

**POST** `/api/trainee/cancel-booking`

**Request Header:**`Authorization: Bearer <token>`

**Request Body:**

```json
 {
     "classScheduleId":"67b2ec4e7112474d9f635429"
 }
```
**Response:**
```json
{
    "success": true,
    "statusCode": 200,
    "message": "Booking canceled successfully",
    "data": {
        "_id": "67b3360024f9a1f58f050345",
        "date": "16-02-2025",
        "startTime": "08:00",
        "endTime": "10:00",
        "trainerId": "67b1dc78612d9e42d02ccefe",
        "capacity": 10,
        "trainees": [],
        "createdAt": "2025-02-17T13:13:36.987Z",
        "updatedAt": "2025-02-17T14:41:29.489Z",
        "__v": 2
    }
}
```
## Database Schema
```js
const AdminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: 'admin' }
});

const TrainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  assignedSchedules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
});

const TraineeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  assignedClasses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }]
});

const ScheduleSchema = new mongoose.Schema({
  date: Date,
  timeSlot: String,
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
  trainees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trainee' }],
  maxTrainees: { type: Number, default: 10 }
});
```


### Setup Instructions

#### Prerequisites

-   **Node.js:** **`(v16+)`**
-   **MongoDB** **`(Local or Remote)`**

**1. Clone the Repository**

```bash
git https://github.com/MehediMehad/Gym-Management-.git
cd Gym-Management
```

**2. Install Dependencies**

```bash
npm install
npm run build
```

**3. Configure Environment Variables**
`Create` **`.env`** `file in the root directory and add the following variables:`

```bash
MONGODB_URI=mongodb://localhost:27017/bicycle-store
PORT=5000
JWT_SECRET= set your JWT_SECRET
BCRYPT_SALT_ROUNDS= set your BCRYPT_SALT_ROUNDS
NODE_ENV='development'
```

**4. Start the Application**

```bash
npm run dev
```

---

## Testing Instructions
1. **Admin Testing:**
   - Login with the provided admin credentials.
   - Create a trainer and assign schedules.
2. **Trainer Testing:**
   - View assigned schedules.
3. **Trainee Testing:**
   - Register as a trainee.
   - Book a class if slots are available.
   - Attempt to book an already full class to test error handling.

## Error Handling
### Sample Responses:
**Validation Errors:**
```json
{
    "success": false,
    "message": "Validation error occurred.",
    "errorDetails": {
        "field": "email",
        "message": "Invalid email format."
    }
}
```
**Unauthorized Access:**
```json
{
    "success": false,
    "message": "Unauthorized access.",
    "errorDetails": "You must be an admin to perform this action."
}
```
**Booking Limit Exceeded:**
```json
{
    "success": false,
    "message": "Class schedule is full. Maximum 10 trainees allowed per schedule."
}
```