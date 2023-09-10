const mongoose=require("mongoose");


const todoSchema=new mongoose.Schema({todo:{
    type:String,
    required:true
}});

module.exports=new mongoose.model("todo",todoSchema); //new b4 mongoose
