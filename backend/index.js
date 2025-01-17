import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import feedbackRouter from './routes/userRoute.js'; // Correct import

dotenv.config();

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRouter); // Ensure this matches the fetch URL

// MongoDB Connection
const dbURI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

// Connect to MongoDB
connectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});