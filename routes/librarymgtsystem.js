import { Router } from "express";

const lmsRouter = Router();

lmsRouter.post("/book", addBook);

lmsRouter.get("/books", getBooks);

lmsRouter.get("/books/count", countBook);

lmsRouter.patch("/book/:id", updateBook);

lmsRouter.delete("/book/:id", deleteBook);
