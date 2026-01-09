import axios from 'axios';
import config from '../config/env';
import { HttpError } from '../utils/httpError';

export class GeoService {
  static async getCityInfo(city: string) {
    try {
      const username = config.geonamesUser;
      if (!username) throw new HttpError(500, 'Falta usuario de GeoNames en .env');

      const url = `http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${username}`;
      const response = await axios.get(url);

      if (!response.data.geonames || response.data.geonames.length === 0) {
        throw new HttpError(404, 'Ciudad no encontrada en GeoNames');
      }

      return response.data.geonames[0];
    } catch (error: any) {
      throw new HttpError(error.status || 500, error.message);
    }
  }
}