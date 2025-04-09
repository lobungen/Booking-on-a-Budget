import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes'; 
import excursionRoutes from './routes/excursionRoutes';

dotenv.config();

const app = express();



// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies


app.post('/api/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'It works!' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/excursions', excursionRoutes);

// Health check or root route (optional)
app.get('/', (req, res) => {
  res.send('Booking-on-a-Budget API is running');
});

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


export default app;
