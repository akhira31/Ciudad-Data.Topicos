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
    { name: 'Reports', description: 'Reportes ciudadanos' }
  ],
  paths: {
    // --- RUTAS DE SALUD (Las que tenías en tu archivo) ---
    '/health': {
      get: {
        summary: 'Estado de salud del módulo',
        tags: ['Health'],
        responses: {
          200: { description: 'Servicio operativo' }
        }
      }
    },
    '/health/life/{iso3}': {
      get: {
        summary: 'Obtener esperanza de vida por país',
        tags: ['Health'],
        parameters: [
          {
            in: 'path',
            name: 'iso3',
            required: true,
            schema: { type: 'string' },
            description: 'Código ISO3 del país (ej. VEN)'
          }
        ],
        responses: {
          200: { description: 'Datos obtenidos exitosamente' },
          400: { description: 'Código ISO3 inválido' }
        }
      }
    },
    '/health/mortality/{iso3}': {
      get: {
        summary: 'Obtener tasa de mortalidad',
        tags: ['Health'],
        parameters: [
          {
            in: 'path',
            name: 'iso3',
            required: true,
            schema: { type: 'string' }
          }
        ],
        responses: { 200: { description: 'OK' } }
      }
    },
    '/health/indicator/{indicator}/{iso3}': {
      get: {
        summary: 'Obtener indicador específico OMS',
        tags: ['Health'],
        parameters: [
          { in: 'path', name: 'indicator', required: true, schema: { type: 'string' } },
          { in: 'path', name: 'iso3', required: true, schema: { type: 'string' } }
        ],
        responses: { 200: { description: 'OK' } }
      }
    },
    // --- RUTAS DE REPORTES (Ejemplo básico) ---
    '/reports': {
      get: {
        summary: 'Listar reportes ciudadanos',
        tags: ['Reports'],
        responses: { 200: { description: 'Lista obtenida' } }
      },
      post: {
        summary: 'Crear reporte',
        tags: ['Reports'],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  category: { type: 'string' },
                  description: { type: 'string' },
                  city: { type: 'string' },
                  country: { type: 'string' }
                }
              }
            }
          }
        },
        responses: { 201: { description: 'Creado' } }
      }
    }
  }
};