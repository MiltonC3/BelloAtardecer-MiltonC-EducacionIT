import express from 'express';
const app = express();

import path from 'path';
import cors from 'cors';
import hbs from 'hbs';
import morgan from 'morgan';
import signRouter from '../router/userRouter.js';
import clientRouter from '../router/clientRouter.js';
import adminRouter from '../router/adminRouter.js';

app.use(cors());
app.use(morgan('dev'));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve('src/public')));

app.set('view engine', 'hbs');
app.set('views', path.resolve('src/views'));
hbs.registerPartials(path.resolve('src/views/partials'));

app.use('/', signRouter);
app.use('/user', clientRouter, adminRouter);

export default app;
