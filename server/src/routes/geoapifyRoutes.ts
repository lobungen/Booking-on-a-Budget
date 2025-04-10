// src/routes/geoapifyRoutes.ts
import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();
const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

router.get('/pois', async (req: Request, res: Response) => {
  const { lat, lng, category = 'tourism.sights' } = req.query as {
    lat?: string;
    lng?: string;
    category?: string;
  };

  if (!lat || !lng) {
    return res.status(400).json({ message: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get('https://api.geoapify.com/v2/places', {
      params: {
        categories: category,
        filter: `circle:${lng},${lat},5000`,
        limit: 20,
        apiKey: GEOAPIFY_KEY,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error('Geoapify POI error:', err);
    res.status(500).json({ message: 'Failed to fetch POIs' });
  }
});

export default router;
