 import express from 'express';
 import morgan from "morgan";
 import authRouter from './routes/auth.routes.js';
 import cookieParser from 'cookie-parser';

//  react server
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',  // React dev server
  credentials: true                  // needed for cookies/sessions
}));

 

 app.use(express.json());
 app.use(morgan("dev"));
 app.use(cookieParser());

 app.use("/api/auth", authRouter);

 export default app;