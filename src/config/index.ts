import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  O_URI: process.env.O_DB_URI,
  L_URI: process.env.L_DB_URI,
  DEF_PASS: process.env.USER_DEF_PASS,
};

export default config;
