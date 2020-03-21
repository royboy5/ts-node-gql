import 'dotenv/config';

export default {
  PORT: Number(process.env.PORT) || 5000,
  HOST: process.env.HOST || '127.0.0.1',
};
