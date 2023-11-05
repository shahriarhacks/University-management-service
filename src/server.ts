// import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { errorLog, log } from "./shared/logger";
import config from "./config";

// let server: Server;

async function connectDB() {
  try {
    await mongoose.connect(config.L_URI as string);
    log.info(`Database Connected Successfully`);
    app.listen(config.PORT, () => {
      log.info(`Application listening on port ${config.PORT}`);
    });
  } catch (error) {
    errorLog.error(`DB connected Failed ${error}`);
  }
}

connectDB();
