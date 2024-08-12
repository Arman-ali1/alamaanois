import mongoose from "mongoose"

const querySchema = new mongoose.Schema({
    username : {
        type : String,
        required :true,
        lowercase : true,
        minLength : 1,
        maxLength : 26,
    },
    phone : {
        type : Number,
        required : true,
        minLength : 1,
        maxLength : 26,
    },
    email : {
        type : String,
        required : true,
        minLenght : 1,
        lowercase : true
    },
    subject : {
        type : String,
    },
    message  :{
        type : String,
        required : [true,"message is required"],
        minLenght : 1,
    }
},
{
    timestamps : true
})

export const Query = mongoose.model("Query", querySchema)