import mongoose from "mongoose"

let serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    img:{
        type:String,
        required:true
    }
})

export let serviceData = mongoose.models.services || mongoose.model("Service", serviceSchema);
