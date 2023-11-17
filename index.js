import express, { response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import roleRoute from './routes/role.js'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import clientRoute from './routes/client.js'
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));
app.use("/api/role",roleRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/client", clientRoute);

// Response Handler middleware
app.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong";
    return res.status(statusCode).json({
        success: [200, 201, 204].some(a=> a=== obj.status) ? true : false,
        status: statusCode,
        message: message,
        data: obj.data
    });
})

app.use(express.static('poc'));

// DB Connection String
const connectMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Database !!")
    } catch (error) {
        throw error ;
    }
}

app.listen(8800, ()=>{
    connectMongoDB();
    console.log("Connected to Backend!");
})