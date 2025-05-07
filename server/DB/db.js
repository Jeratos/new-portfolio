import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let uri=process.env.MONGODB_URI;


let dbConnect= async()=>{
try {
    await mongoose.connect(uri)
console.log("Data base connected successfully...")
} catch (error) {
    console.error("connection failed....")
}
}

export default dbConnect