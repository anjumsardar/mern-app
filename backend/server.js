import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";



dotenv.config()
const app=express()
dbCon()
app.use(cors())
app.use(express.json())
app.use('/api',routers)



const port = process.env.PORT
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});