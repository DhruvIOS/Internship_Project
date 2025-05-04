# 🏠 Rental Listings Project


## 📌 Features

- Submit new rental listings with:
  - Title
  - Description
  - Rent
  - Address
  - Number of Rooms
  - Contact Info
- Listings are being stored in a MongoDB database
- Timestamp is being recorded on each listing

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: MongoDB (via Mongoose)

---

### Backend Setup
1. Navigate to the backend folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file inside of the root of the backend folder with:
   ```
   MONGO_URI=your_mongodb_connection_string_here
   ```
4. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on  http://localhost:5000

### Frontend Setup
1. Navigate to the frontend folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React app:
   ```
   npm start
   ```
   The frontend will open on http://localhost:3000

