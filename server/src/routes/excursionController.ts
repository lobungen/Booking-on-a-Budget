import { Request, Response } from 'express';
import Excursion from '../models/Excursion';

export const getAllExcursions = async (req: Request, res: Response) => {
  const excursions = await Excursion.findAll();
  res.json(excursions);
};

export const createExcursion = async (req: Request, res: Response) => {
  const { title, location, description, price } = req.body;
  const newExcursion = await Excursion.create({ title, location, description, price });
  res.status(201).json(newExcursion);
};