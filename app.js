const express=require("express");
const path=require("path");
const mongoose=require("mongoose");

//connecting database
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"todo-backend"
}).then(()=>console.log("Database connected..."))
.catch(e=>console.log("Database connection failed: "+e));

//creating server
const app=express();

//middlewares
app.set("view engine","ejs");
app.use(express.static(path.join(path.resolve(),"public")));
app.use(express.urlencoded({extended:true}));

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));


//server configurations
app.listen(5000,()=>{
    console.log("Server running at port 5000...");
})