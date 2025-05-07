import Contact from "../model/model.js";
import { projectData } from "../model/projectModel.js";

let contact= async(req,res)=>{
     try {
          
          let {firstName,lastName,email,phone,message} =await req.body;
     let Creatcontact= await Contact.create({firstName,lastName,email,phone,message})
          res.status(200).json(Creatcontact);
          
     } catch (error) {
          console.log(error)
     }

}

export let project = async(req,res)=>{
       
     try {
          let data= await projectData.find();
        return  res.status(200).json(data);
          
     } catch (error) {
          console.log(error)
     }
}
export default contact