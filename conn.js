const mongoose= require("mongoose")

mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("connect  succesful");
}).catch((e)=>{
    console.log("faild");
});