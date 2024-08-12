import { app } from "./app.js";
import dotenve from "dotenv";
import connectDB from "./DB/database.js";

// Environment variables configure
dotenve.config({ path: "./.env" });

// database connection and server listen
connectDB()
  .then(() => {
    app.listen( process.env.PORT || 8000 , () => {
      console.log(`Server is listening... at ${process.env.PORT}`);
    });
    
    app.on("error",(error)=>{
      throw error
    })
  })
  .catch((error) => {
    console.log(`Data connection Failed..!!`, error);
  });
