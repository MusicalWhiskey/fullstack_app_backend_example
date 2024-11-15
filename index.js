import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { connect } from "./db/connect.js";

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors())



//Routes
app.get('/', async (req, res) => (
    res.send("Welcome to the backend") 
))

//Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({error})
})

app.listen(PORT, () => {
    console.log(`Eff it. We'll do it live on ${PORT}`)
})