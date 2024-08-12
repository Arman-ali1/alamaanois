import mongoose from "mongoose";
import {databaseName} from "./../constants.js";

const connectDB = async ()=>{
    try{
       const dbConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${databaseName}`);
        console.log(`Data connection Successful at :${dbConnectionInstance.connection.host}`);
        // console.log(dbConnectionInstance);
    }catch(error){
        console.log(`Data connection Failed..!!`, error);
    }
}

export default connectDB ;