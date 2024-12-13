// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoutes } from './app/modules/product/product.routes';

const app : Application = express();


//middleware
app.use(express.json());
app.use(cors());

//application route
app.use('/api/products', productRoutes);

//get controller
const getController = (req: Request, res: Response)=>{
    res.send("Hello world!");
}
//home
app.get('/', getController);

export default app;

