import { Router } from 'express';
import { getLifeHandler, getMortalityHandler, getIndicatorHandler } from '../controllers/health.controller';

const router = Router();

// Ruta raíz de health (para probar que el módulo carga)
router.get('/', (req, res) => {
    res.json({ status: "UP", module: "Health" });
});

// Rutas específicas conectadas a los handlers del controlador
router.get('/life/:iso3', getLifeHandler);
router.get('/mortality/:iso3', getMortalityHandler);
router.get('/indicator/:indicator/:iso3', getIndicatorHandler);

export default router;