import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from 'cors'



import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";




const app=express()
dbCon()
app.use(cors())
app.use(express.json())
app.use('/api',routers)



const port = 8000 || process.env.PORT

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});