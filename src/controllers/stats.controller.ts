import { Request, Response, NextFunction } from 'express';
import { StatsService } from '../services/stats.service';

export const populationHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { country } = req.params; 
    const data = await StatsService.getPopulationByCountry(country);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};