import { Request, Response } from 'express';
import { searchCity as searchCityService } from '../services/amadeusService';

export const searchCity = async (req: Request, res: Response) => {
  const { keyword } = req.query;

  if (!keyword || typeof keyword !== 'string') {
    return res.status(400).json({ message: 'Keyword query parameter is required' });
  }

  try {
    const data = await searchCityService(keyword);
    res.json(data);
  } catch (err) {
    console.error('Error searching city:', err);
    res.status(500).json({ message: 'Failed to search city' });
  }
};
