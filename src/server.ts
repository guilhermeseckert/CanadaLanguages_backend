import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import {router} from './routes'
import cors from 'cors';
import { errors } from 'celebrate';
import AppError from './shared/errors/AppError';
import './database';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.statusCode,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
});

app.listen(3333, () => {
  console.log('server is runing');
});
