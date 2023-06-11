import { config } from "dotenv";

config();

const {
  PORT,
  HOST,
  DATABASE,
  USER,
  PASSWORD,
  PORT_DB,
  CLOUD_NAME,
  API_KEY,
  API_SECRET,
} = process.env;

export const appConfig = {
  app: {
    port: PORT || 4000,
  },
  db: {
    url: `postgres://${USER}:${PASSWORD}@${HOST}:${PORT_DB}/${DATABASE}`,
  },
  storage: {
    name: CLOUD_NAME,
    key: API_KEY,
    secret: API_SECRET,
  },
};
