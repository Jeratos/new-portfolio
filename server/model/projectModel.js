import mongoose from "mongoose";

let projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img:{
    type: String,
  },
  url: {
    type: String,
   
  },
});

export let projectData = mongoose.models.projects || mongoose.model("Project-data",projectSchema);