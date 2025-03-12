import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/librarymgtsystem.js";
import { remoteUpload } from "../middlewares/lms.js";

const lmsRouter = Router();

lmsRouter.post("/book", remoteUpload.single("image"), createBook);

lmsRouter.get("/books", getBooks);

lmsRouter.get("/book/:id", getBookById);

lmsRouter.patch("/book/:id", updateBook);

lmsRouter.delete("/book/:id", deleteBook);

export default lmsRouter;
