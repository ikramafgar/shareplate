import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.send('🍽️ Shareplate API is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

export default app;
