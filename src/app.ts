import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { errorHandler } from './utils/errorHandler';

// Importar la definición de Swagger que creamos en el Paso 1
import { swaggerDefinition } from './docs/swagger'; 

// Importar rutas
import healthRoutes from './routes/health.routes';
import statsRoutes from './routes/stats.routes';
import transitRoutes from './routes/transit.routes';
import geoRoutes from './routes/geo.routes';
import reportRoutes from './routes/report.routes';

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// --- CONFIGURACIÓN SWAGGER ---
// Ya no usamos swagger-jsdoc para escanear archivos.
// Usamos directamente el objeto que importamos arriba.
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
// -----------------------------

// Conectar rutas
app.use('/health', healthRoutes);
app.use('/stats', statsRoutes);
app.use('/transit', transitRoutes);
app.use('/geo', geoRoutes);
app.use('/reports', reportRoutes);

app.get('/', (req, res) => res.json({ mensaje: "API CiudadData 100% operativa" }));

app.use(errorHandler);

export default app;