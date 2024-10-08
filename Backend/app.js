import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { jsondatalimit } from "./constants.js";
const app = express();

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: `${jsondatalimit}`,
  })
);
app.use(urlencoded({extended:true,limit: `${jsondatalimit}`}))
//  for storing img,files,favicon in public folder
app.use(express.static("public"))
app.use(cookieParser())

// Routes import
import queryRouter from "./routes/queryRoutes.js"

// Routes declaration
app.use("/api/v1" ,queryRouter);


export { app };
