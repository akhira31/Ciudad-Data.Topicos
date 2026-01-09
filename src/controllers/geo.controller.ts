import { Request, Response, NextFunction } from 'express';
import { GeoService } from '../services/geo.service';

export const getCityHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await GeoService.getCityInfo(req.params.cityName);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};