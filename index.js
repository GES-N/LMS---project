import express from "express";
import mongoose from "mongoose";
import lmsRouter from "./routes/librarymgtsystem.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3034;

app.use(express.json());
app.use(cors());
app.use("/api/v1", lmsRouter);

await mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
