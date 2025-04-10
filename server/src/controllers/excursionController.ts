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

/**
 * @desc Delete an excursion by ID
 * @route DELETE /api/excursions/:id
 * @access Protected (optional)
 */
export const deleteExcursion = async (req: Request, res: Response): Promise<void> => {
  try {
    const excursionId = req.params.id;

    const excursion = await Excursion.findByPk(excursionId);

    if (!excursion) {
      res.status(404).json({ message: 'Excursion not found' });
      return;
    }

    await excursion.destroy();
    res.status(200).json({ message: 'Excursion deleted successfully' });
  } catch (err) {
    console.error('Error deleting excursion:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getExcursionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const excursion = await Excursion.findByPk(req.params.id);
    if (!excursion) {
      res.status(404).json({ message: 'Not found' });
      return;
    }
    res.json(excursion);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching excursion' });
  }
};

export const updateExcursion = async (req: Request, res: Response): Promise<void> => {
  try {
    const excursion = await Excursion.findByPk(req.params.id);
    if (!excursion) {
      res.status(404).json({ message: 'Not found' });
      return;
    }

    const { title, location, description, price } = req.body;
    excursion.set({ title, location, description, price });
    await excursion.save();

    res.json({ message: 'Excursion updated', excursion });
  } catch (err) {
    res.status(500).json({ message: 'Error updating excursion' });
  }
};



