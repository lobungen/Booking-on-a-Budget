import express, { Request, Response } from 'express';
import { searchCity } from '../controllers/amadeusController';
import { getPointsOfInterest } from '../controllers/amadeusPoiController';

const router = express.Router();


router.get('/cities', searchCity as express.RequestHandler);
router.get('/pois', getPointsOfInterest as express.RequestHandler);

export default router;