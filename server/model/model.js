import mongoose from "mongoose";


let contactschema =new mongoose.Schema({
firstName:{
    type:String,
    required:true
},
lastName:{
    type :String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
},
message:{
    type:String,
    required:true
}
})

let Contact = new mongoose.model("Contact",contactschema);

export default Contact; 