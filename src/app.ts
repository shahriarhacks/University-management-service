import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";

const app: Application = express();

//Middleware Calling Outside Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (_req: Request, res: Response) => {
  res.send(httpStatus.OK).json({
    request: true,
    server: "Server was running",
  });
});

export default app;
