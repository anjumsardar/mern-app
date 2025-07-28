import mongoose from "mongoose";
//import dotenv from 'dotenv';  // Import dotenv
//dotenv.config();  
//const DB_URL=process.env.DB_URL || 'mongodb://localhost:27017/crud'
const dbCon=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/crud')
        console.log('Mongodb is conntected')
    } catch (error) {
        console.log(error)
    }
}

export default dbCon