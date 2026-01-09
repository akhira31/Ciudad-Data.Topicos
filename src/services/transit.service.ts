import { fetchRoutesFromGTFS, fetchETAFromMTA } from '../utils/mtaClient';
import { HttpError } from '../utils/httpError';

export class TransitService {
  static async getRoutesByCity(city: string) {
    if (city.toLowerCase() !== 'nyc') {
      throw new HttpError(400, 'Solo se soporta NYC en este momento');
    }
    return await fetchRoutesFromGTFS();
  }

  static async getETA(stopId: string) {
    const apiKey = process.env.MTA_API_KEY || '';
    if (!stopId) throw new HttpError(400, 'Falta el parámetro stop_id');
    return await fetchETAFromMTA(stopId, apiKey);
  }
}