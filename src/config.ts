import dotenv from "dotenv";

dotenv.config();

export interface AppConfig {
  port: number;
  host: string;
}

export const config: AppConfig = {
  port: parseInt(process.env.PORT as string),
  host: process.env.APP_HOST as string,
};
