import express from 'express';
import { getAllExcursions, createExcursion } from '../controllers/excursionController';
import authenticate from '../middleware/auth'; // ✅ Use this one



const router = express.Router();

router.get('/', getAllExcursions);
router.post('/', authenticate, createExcursion);

export default router;