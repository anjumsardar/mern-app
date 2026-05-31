import express from 'express'
import { create,get,getUserById,Updated,Delete } from '../controllers/usercontrollers.js'

const routers=express.Router()

routers.post('/create',create)
routers.get('/get',get)
routers.get("/user/:id", getUserById);
routers.put('/update/:id',Updated)
routers.delete('/delete/:id',Delete)



export default routers