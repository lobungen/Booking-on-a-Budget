import express from 'express';
import {
  getAllExcursions,
  createExcursion,
  deleteExcursion,
  getExcursionById,
  updateExcursion
} from '../controllers/excursionController';
import authenticate from '../middleware/auth';

const router = express.Router();

router.get('/', getAllExcursions);
router.post('/', authenticate, createExcursion);
router.delete('/:id', authenticate, deleteExcursion); // 🆕 Add this
router.get('/:id', authenticate, getExcursionById); // new
router.put('/:id', authenticate, updateExcursion);  // new

export default router;
