import { Schema, model } from 'mongoose';

// Este es el "molde" de lo que guardaremos
const ReportSchema = new Schema({
  category: { type: String, required: true }, // 'geo', 'health', 'transit'
  description: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const ReportModel = model('Report', ReportSchema);