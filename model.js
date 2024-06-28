const mongoose= require("mongoose");
const validator= require("validator");
const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(valu)){
                throw new  Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
        unique:true,
    },
    address:{
        type:String,
        required:true
    }
});

const studentModel= mongoose.model("Student",studentSchema);

module.exports= studentModel;