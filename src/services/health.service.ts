import apiClient from '../utils/apiClient';
import { HttpError } from '../utils/httpError';
import { WHORecord, HealthSummary } from '../types/health';

export class HealthService {
  static async getLifeExpectancy(iso3: string): Promise<HealthSummary> {
    try {
      // WHOSIS_000001 es el código de la OMS para esperanza de vida
      const response = await apiClient.get(`WHOSIS_000001?$filter=SpatialDim eq '${iso3.toUpperCase()}'`);
      
      const records: WHORecord[] = response.data.value;

      if (!records || records.length === 0) {
        throw new HttpError(404, 'No se encontraron datos para ese país');
      }

      // Tomamos el primer registro (suele ser el más reciente)
      const latest = records[0];
      return {
        country: latest.SpatialDim,
        year: latest.TimeDim || 'N/A',
        value: latest.NumericValue || 0,
        indicator: 'Esperanza de vida al nacer'
      };
    } catch (error: any) {
      throw new HttpError(error.status || 500, error.message || 'Error en el servicio de salud');
    }
  }
}