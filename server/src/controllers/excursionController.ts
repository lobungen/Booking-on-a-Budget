import { Request, Response } from 'express';
import Excursion from '../models/Excursion';

/**
 * @desc Get all excursions
 * @route GET /api/excursions
 */
export const getAllExcursions = async (req: Request, res: Response): Promise<void> => {
  try {
    const excursions = await Excursion.findAll();
    res.status(200).json(excursions);
  } catch (err) {
    console.error('Error fetching excursions:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

/**
 * @desc Create a new excursion
 * @route POST /api/excursions
 * @access Protected
 */
export const createExcursion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, location, description, price } = req.body;

    if (!title || !location || !price) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    const newExcursion = await Excursion.create({
      title,
      location,
      description,
      price,
    });

    res.status(201).json(newExcursion);
  } catch (err) {
    console.error('Error creating excursion:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
