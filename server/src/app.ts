import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import excursionRoutes from './routes/excursionRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/excursions', excursionRoutes);

// Health check or root route (optional)
app.get('/', (req, res) => {
  res.send('Booking-on-a-Budget API is running');
});

export default app;
