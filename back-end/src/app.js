import dotenv from 'dotenv'
//carrega as variáveis do arquivo.env
//no objeto global process.env
dotenv.config()

import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();
import mongoose from 'mongoose'
mongoose.connect(process.env.DATABASE_URL)

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);




/************************************************
 * Rotas 
 */

import clienteRouter from './routes/cliente.js'

app.use('/clientes', clienteRouter)

export default app;