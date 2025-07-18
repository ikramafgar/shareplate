
---

## 🔁 Project Flow

### 1. **Frontend (React - `/client`)**
- Built with React and modern JavaScript (ES6+).
- Uses React Router for navigation and component-based structure.
- Communicates with the backend through API requests using `fetch` or `axios`.
- Handles user interface, form submissions, and dynamic rendering of data.

### 2. **Backend (Node/Express - `/server`)**
- Manages routing, APIs, authentication, and business logic.
- Receives requests from the React frontend (usually under routes like `/api/...`).
- Validates and processes data, then communicates with MongoDB.
- Sends responses back to the frontend (JSON format).

### 3. **Database (MongoDB)**
- Stores application data such as user information, form submissions, or app content.
- Mongoose is used for schema definition and database communication.
- Data models live in `/server/models`.

---

## 🚀 How It Works (Example Flow)

1. A user visits the React frontend (via `/client`).
2. The user submits a form (e.g., login, feedback).
3. The frontend sends a POST request to the backend (`/server/routes/...`).
4. The Express server receives the request, validates it, and interacts with MongoDB.
5. A response is sent back (e.g., success message, user data).
6. The frontend updates the UI based on the response.

---

## 🧱 Technologies Used

| Layer       | Tech Stack                     |
|-------------|--------------------------------|
| Frontend    | React.js, JSX, Tailwind/Bootstrap |
| Backend     | Node.js, Express.js            |
| Database    | MongoDB, Mongoose              |
| Communication | REST API (JSON)              |
| Tools       | VSCode, Git, Postman           |

---

## 🛠️ Setup Instructions

### 🔧 1. Install Backend Dependencies
```bash
cd server
npm install
