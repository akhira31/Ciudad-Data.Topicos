import axios from 'axios';
import { HttpError } from '../utils/httpError';

export class StatsService {
  private static readonly BASE_URL = 'http://api.worldbank.org/v2';

  static async getPopulationByCountry(countryCode: string) {
    try {
      const url = `${this.BASE_URL}/country/${countryCode}/indicator/SP.POP.TOTL?format=json`;
      const response = await axios.get(url);
      
      const data = response.data?.[1];
      if (!Array.isArray(data) || data.length === 0) {
        throw new HttpError(404, 'No se encontraron datos de población para este país');
      }

      const latest = data[0];
      return {
        country: latest.country.value,
        year: latest.date,
        population: latest.value,
      };
    } catch (error: any) {
      throw new HttpError(error.status || 500, error.message || 'Error en el servicio de estadísticas');
    }
  }
}