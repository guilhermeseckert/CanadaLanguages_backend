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

app.listen(3333, () => {
  console.log('server is runing');
});
