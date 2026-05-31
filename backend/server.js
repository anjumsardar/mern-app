import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from 'cors'

import routers from './routes/routes.js'
import dbCon from "./utlis/db.js";

const app=express()
await dbCon()
app.use(cors())
app.use(express.json())
app.use('/api',routers)

// ✅ HEALTH CHECK (PUT IT HERE)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


const port = process.env.PORT || 8000

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});
