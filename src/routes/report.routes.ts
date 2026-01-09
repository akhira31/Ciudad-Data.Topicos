import { Router } from 'express';
import { createReportHandler, getReportsHandler } from '../controllers/report.controller';

const router = Router();

/**
 * @swagger
 * /reports:
 * get:
 * summary: Ver todos los reportes
 * tags: [Reportes]
 * responses:
 * 200:
 * description: Lista de reportes
 * post:
 * summary: Crear reporte nuevo
 * tags: [Reportes]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * category:
 * type: string
 * description:
 * type: string
 * city:
 * type: string
 * country:
 * type: string
 * responses:
 * 201:
 * description: Reporte creado exitosamente
 */
router.get('/', getReportsHandler);
router.post('/', createReportHandler);

export default router;