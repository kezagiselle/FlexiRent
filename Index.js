import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import connectDB from './DB/connectDB.js';
// import express, { Router } from 'express';
import Router from './Routers/index.js';
import swaggerUi from 'swagger-ui-express';
import swagger from './docs/swagger.json' assert {type: "json"}
import path from 'path';
import { fileURLToPath } from 'url';

const corsOptions ={
    allowedHeaders: ["Authorization", "Content-Type" ],
    methods: ["GET", "POST", "PUT", "UPDATE", "DELETE"],
    origin:"*",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/FlexiRent', Router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
app.use('/upload', express.static(path.join(__dirname, 'uploads')))

const start = async () => {
    try{
        connectDB()
        app.listen(process.env.PORT, console.log(`Server is listening on port ${process.env.PORT}`));
    } catch (error){
        console.log(error)
    }
}
start();
