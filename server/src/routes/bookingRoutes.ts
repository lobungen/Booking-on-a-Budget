// server/routes/bookingRoutes.ts
import express from 'express';

const router = express.Router();

router.get('/check', (req, res) => {
  const { date } = req.query;
  // Simulate day-specific availability
  const isWeekend = new Date(date as string).getDay() % 6 === 0;
  const available = !isWeekend; // unavailable on weekends
  res.json({ available });
});

export default router;
