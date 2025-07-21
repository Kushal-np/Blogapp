import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import bookRoutes from "./routes/book.route.js"
import authRoutes from './routes/user.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware (for parsing JSON)
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'https://bookish-pi.vercel.app',   
  credentials: true                  
}));

// Connect to database
connectDB();

// Basic route
app.use("/api/v1/auth/" , authRoutes)
app.use("/api/v1/book" , bookRoutes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});