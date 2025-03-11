import { Router } from "express";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/librarymgtsystem.js";

const lmsRouter = Router();

lmsRouter.post("/book", createBook);

lmsRouter.get("/books", getBooks);

lmsRouter.get("/book", getBookById);

lmsRouter.patch("/book/:id", updateBook);

lmsRouter.delete("/book/:id", deleteBook);

export default lmsRouter;
