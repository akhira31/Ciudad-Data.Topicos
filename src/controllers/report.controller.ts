import { Request, Response, NextFunction } from 'express';
import { ReportService } from '../services/report.service';

export const createReportHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const report = await ReportService.createReport(req.body);
    res.status(201).json({ success: true, data: report });
  } catch (err) {
    next(err);
  }
};

export const getReportsHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reports = await ReportService.getAllReports();
    res.json({ success: true, data: reports });
  } catch (err) {
    next(err);
  }
};