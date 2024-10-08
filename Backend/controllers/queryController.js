import asyncHandler from "../utilities/asyncHandler.js"
import { Query } from "../models/clientQuery/queryModel.js";
import {ApiError} from "./../utilities/apiError.js"

const registerUser = asyncHandler(async (req,res)=>{
    // console.log(req);
    
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
    console.log("armann");
    
    const allqueries = await  Query.find({});
    res.status(200).json({
        message : allqueries
    });
} )

const login = asyncHandler(async (req,res)=>{
    console.log(req.body);
    
    console.log("armann",req.body.email);
    console.log("armann",req.body.password);
    const password = req.body.password;
    const user = await  Query.findOne({phone:password});
    console.log("user",user);
    if(!user){
        throw new ApiError(409,"Wrong Cradentials, User not find");
    }
    res.status(200).json({
        message : user
    });
} )

export {registerUser, allqueries, login}

