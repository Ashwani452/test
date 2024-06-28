const express = require("express");
const app= express();
const port=process.env.PORT || 4000;
require("./conn");
const Studentmodel= require("./model");
const { connect } = require("mongoose");

app.use(express.json());
// create a new student 


app.post("/students",(req,res)=>{
   const user=new Studentmodel(req.body);
  
   user.save().then(()=>{
        res.send(user)
   }).catch((e)=>{
        res.send(e);
   });
   console.log(user);
});


//get data

app.get("/students",async(req,res)=>{

     try {
         const studentData=await Studentmodel.find();
         res.send(studentData);
     } catch (error) {
          console.log(error);
     }
});

//get a singal student data

app.get("/students/:id",async(req,res)=>{
     try {
          const _id = req.params.id;
          const student =await Studentmodel.findById(_id);

          if (!student) {
               return res.status(404).send();
          } else {
               res.send(student);
          }
     } catch (error) {
          res.status(500).send(error);
     }
  
});

app.delete("/students/:id",async(req,res)=>{
     try {
     
        const deletestudent=await Studentmodel.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
          return res.status(404).send();
        } else {
          res.send(deletestudent);
        }

     } catch (error) {
          res.status(500).send();
     }
});

//update Student

app.patch("/students/:id",async(req,res)=>{

     try {
     const _id= req.params.id;
     const updatestudent= await Studentmodel.findByIdAndUpdate(_id, req.body ,{
          new:true
     });
      res.send(updatestudent);
     } catch (error) {
          res.status(500).send(updatestudent);
     }
});

app.listen(port,()=>{
     console.log("Connectio is run");
 });