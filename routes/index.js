const router=require("express").Router();
const Todo=require("../models/Todo");

router.get("/",async(req,res)=>{
    const allTask=await Todo.find();
    res.render("index.ejs",{todo:allTask});
});

module.exports=router;
