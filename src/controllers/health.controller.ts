import { Request, Response, NextFunction } from 'express';
import { getLifeExpectancy } from '../services/oms.service';

// 1. Handler existente (Esperanza de vida)
export const getLifeHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { iso3 } = req.params;
    const data = await getLifeExpectancy(iso3);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

// 2. Handler NUEVO (Mortalidad - Placeholder para que no falle)
export const getMortalityHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { iso3 } = req.params;
    // Aquí iría la llamada al servicio real en el futuro
    res.json({ 
        country: iso3, 
        indicator: "Mortality Rate", 
        value: "Datos simulados por ahora", 
        year: 2024 
    });
  } catch (error) {
    next(error);
  }
};

// 3. Handler NUEVO (Indicador Genérico - Placeholder para que no falle)
export const getIndicatorHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { indicator, iso3 } = req.params;
    res.json({ 
        country: iso3, 
        indicator_code: indicator, 
        value: "Datos en construcción", 
        source: "WHO Placeholder" 
    });
  } catch (error) {
    next(error);
  }
};