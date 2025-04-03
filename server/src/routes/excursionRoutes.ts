import express from 'express';
import { getAllExcursions, createExcursion } from '../controllers/excursionController';
import authenticate from '../middleware/auth';
import excursionRoutes from './routes/excursionRoutes';


app.use('/api/excursions', excursionRoutes);

const router = express.Router();

router.get('/', getAllExcursions);
router.post('/', authenticate, createExcursion);

export default router;