import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export async function fetchRoutesFromGTFS() {
  const filePath = path.join(__dirname, '../../data/routes.txt');
  if (!fs.existsSync(filePath)) return [];
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const records = parse(content, { columns: true });

  return records.map((r: any) => ({
    route_id: r.route_id,
    short_name: r.route_short_name,
    long_name: r.route_long_name,
    type: r.route_type === '3' ? 'bus' : 'unknown'
  }));
}

export async function fetchETAFromMTA(stopId: string, apiKey: string) {
  const url = `https://bustime.mta.info/api/siri/stop-monitoring.json?key=${apiKey}&MonitoringRef=${stopId}`;
  const response = await axios.get(url);
  return response.data;
}