import { Request, Response, NextFunction } from 'express';
import { TransitService } from '../services/transit.service';

export const getRoutesHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { city } = req.params;
    const data = await TransitService.getRoutesByCity(city);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};