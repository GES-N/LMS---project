import express from "express";
import mongoose from "mongoose";
import lmsRouter from "./routes/librarymgtsystem.js";
import cors from "cors";

const app = express();
const port = 3034;

app.use(express.json());
app.use(cors());
app.use("/api/v1", lmsRouter);

await mongoose.connect(process.env.MONGO_URI);
// const db= mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.log('Database is connected');
// })

//global config

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
