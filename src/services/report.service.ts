import { ReportModel } from '../models/report.model';

export class ReportService {
  static async createReport(data: any) {
    const newReport = new ReportModel(data);
    return await newReport.save();
  }

  static async getAllReports() {
    return await ReportModel.find().sort({ createdAt: -1 });
  }
}