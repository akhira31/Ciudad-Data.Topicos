import { Router } from 'express';
import { getCityHandler } from '../controllers/geo.controller';

const router = Router();
router.get('/city/:cityName', getCityHandler);

export default router;
