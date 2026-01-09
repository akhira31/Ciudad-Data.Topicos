export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'CiudadData API',
    version: '1.0.0',
    description: 'API Urbana UCAB - Documentación Centralizada',
  },
  servers: [
    { url: 'http://localhost:3000', description: 'Servidor Local' }
  ],
  tags: [
    { name: 'Health', description: 'Estado del sistema y datos OMS' },
    { name: 'Geography', description: 'Información de ciudades (GeoNames)' },
    { name: 'Statistics', description: 'Datos demográficos (Banco Mundial)' },
    { name: 'Transit', description: 'Rutas de transporte urbano' },
    { name: 'Reports', description: 'Gestión de reportes ciudadanos en MongoDB' }
  ],
  paths: {
    // --- MÓDULO DE SALUD ---
    '/health/life/{iso3}': {
      get: {
        summary: 'Obtener esperanza de vida por país',
        tags: ['Health'],
        parameters: [{ in: 'path', name: 'iso3', required: true, schema: { type: 'string' }, description: 'ISO3 (ej. VEN)' }],
        responses: { 200: { description: 'Éxito' } }
      }
    },
    // --- MÓDULO DE GEOGRAFÍA ---
    '/geo/city/{cityName}': {
      get: {
        summary: 'Obtener información geográfica de una ciudad',
        tags: ['Geography'],
        parameters: [{ in: 'path', name: 'cityName', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Datos de GeoNames obtenidos' } }
      }
    },
    // --- MÓDULO DE ESTADÍSTICAS ---
    '/stats/population/{country}': {
      get: {
        summary: 'Obtener población total por país',
        tags: ['Statistics'],
        parameters: [{ in: 'path', name: 'country', required: true, schema: { type: 'string' }, description: 'Código de país (ej. VE)' }],
        responses: { 200: { description: 'Datos de población obtenidos' } }
      }
    },
    // --- MÓDULO DE TRÁNSITO ---
    '/transit/routes/{city}': {
      get: {
        summary: 'Listar rutas de transporte por ciudad',
        tags: ['Transit'],
        parameters: [{ in: 'path', name: 'city', required: true, schema: { type: 'string' }, description: 'Ciudad (actualmente solo nyc)' }],
        responses: { 200: { description: 'Lista de rutas' } }
      }
    },
    // --- MÓDULO DE REPORTES ---
    '/reports': {
      get: {
        summary: 'Listar todos los reportes guardados',
        tags: ['Reports'],
        responses: { 200: { description: 'Lista de reportes desde MongoDB' } }
      },
      post: {
        summary: 'Crear y guardar un nuevo reporte',
        tags: ['Reports'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['category', 'description', 'city', 'country'],
                properties: {
                  category: { type: 'string', example: 'Infraestructura' },
                  description: { type: 'string', example: 'Hueco en la vía principal' },
                  city: { type: 'string', example: 'Caracas' },
                  country: { type: 'string', example: 'Venezuela' }
                }
              }
            }
          }
        },
        responses: {
          201: { description: 'Reporte guardado exitosamente' },
          500: { description: 'Error al conectar con MongoDB' }
        }
      }
    }
  }
};