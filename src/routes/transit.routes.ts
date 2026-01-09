import { Router } from 'express';
import { getRoutesHandler } from '../controllers/transit.controller';

const router = Router();
router.get('/routes/:city', getRoutesHandler);

export default router;
