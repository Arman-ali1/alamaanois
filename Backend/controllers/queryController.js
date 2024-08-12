import asyncHandler from "../utilities/asyncHandler.js"
import { Query } from "../models/clientQuery/queryModel.js";
import {ApiError} from "./../utilities/apiError.js"

const registerUser = asyncHandler(async (req,res)=>{
    console.log(req.body);
    const userRegistered =  await Query.create(req.body)
    if(!userRegistered){
        return new ApiError(409,"Query not registered, Something went wrong");
    }
    res.status(200).json({
        message : "ok",
        user : userRegistered
    })
    
})

const allqueries = asyncHandler(async (req,res)=>{
    const allqueries = await  Query.find({});
    res.status(200).json({
        message : allqueries
    });
} )

export {registerUser, allqueries}

