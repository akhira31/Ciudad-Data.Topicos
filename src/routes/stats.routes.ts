import { Router } from 'express';
import { populationHandler } from '../controllers/stats.controller';

const router = Router();

// URL: GET /stats/population/VE
router.get('/population/:country', populationHandler);

export default router;