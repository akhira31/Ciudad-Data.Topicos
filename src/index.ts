import mongoose from 'mongoose';
import app from './app';
import config from './config/env';

mongoose.connect(config.mongoUri)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(config.port, () => {
      console.log(`🚀 Servidor listo en http://localhost:${config.port}`);
    });
  })
  .catch(err => console.error('❌ Error de conexión:', err));