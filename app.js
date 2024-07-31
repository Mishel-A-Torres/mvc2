import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import {test} from './backend/controllers/cliente.controller.js';
import {test2} from './backend/controllers/estcompra.controller.js';
import {test3} from './backend/controllers/productos.controller.js';

dotenv.config();

mongoose.connect(process.env.url.db)

.then(() =>{
    console.log('funciona la conexion a la base de datos')
})
.catch((error) => {
    console.log('no funciona la conexion a la base de datos')
})

const app=express()
app.use(cors());

app.listen(4001, ()=>{
    console.log('funciona mi servidor local')
})

test()
test2()
test3()