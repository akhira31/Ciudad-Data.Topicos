import dotenv from 'dotenv';
dotenv.config();
export default {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/ciudaddata',
  geonamesUser: process.env.GEONAMES_USER || '',
  mtaApiKey: process.env.MTA_API_KEY || ''
};