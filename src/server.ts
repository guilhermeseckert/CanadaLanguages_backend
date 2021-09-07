import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import {router} from './routes'
import cors from 'cors';
import { errors } from 'celebrate';
import './database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is runing ${process.env.SERVER_PORT}`);
});
