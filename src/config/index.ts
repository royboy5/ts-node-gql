import 'dotenv/config';

interface Config {
  env: string,
  ssl: boolean,
  port: string,
  host: string,
  loggin: string,
  depthLimit: number,
}

export default {
  PORT: Number(process.env.PORT) || 5000,
  HOST: process.env.HOST || '127.0.0.1',
};
