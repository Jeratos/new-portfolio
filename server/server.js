import express, { json } from "express";
import cors from "cors";
import router from "./routes/router.js";
import dbConnect from "./DB/db.js";
let app = express();

const crosAction={
    origin:"http://localhost:5173",
    method:"GET,POST,DELETE,PATCH,PUT,HEAD",
    credentials:true
}


app.use(cors(crosAction));
app.use(express.json());

let port= 8080;

app.get("/",(req, res)=>{

    res.send("hello world");
})

app.use("/api/auth", router)


dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log("listening...");
    })
    
})