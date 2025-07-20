import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import bookRoutes from "./routes/book.route.js"
// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware (for parsing JSON)
app.use(express.json());

// Connect to database
connectDB();

// Basic route
app.use("/api/v1/book" , bookRoutes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
