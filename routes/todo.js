const router=require("express").Router();
const Todo=require("../models/Todo");

//routes
router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    console.log(todo);

    const newTodo=new Todo({todo})

    //save the task
    newTodo.save()
    .then(()=>{
        console.log("New task added to database successfully...");
        res.redirect("/")
    })
    .catch(e=>console.log("Failure to add new task: "+e))
});

router.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Task deleted from database successfully...");
        res.redirect("/")
    })
    .catch(e=>console.log("Failure to delete task: "+e))
});

module.exports=router;