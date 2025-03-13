import {
  addBookSchema,
  updateBookSchema,
} from "../validators/librarymgtsystem.js";
import { BookModel } from "../models/librarymgtsystem.js";

// Add a Book
export const createBook = async (req, res, next) => {
  try {
    const { error, value } = addBookSchema.validate({
      ...req.body,
      image: req.files?.image[0]?.filename,
      bookFile: req.files?.bookFile[0]?.filename,
    });
    if (error)
      return res
        .status(422)
        .json({ errors: error.details.map((err) => err.message) });

    res.status(201).json(await BookModel.create(value));
  } catch (error) {
    next(error);
  }
};

// Fetch all books
export const getBooks = async (req, res, next) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

//Get a book by ID
export const getBookById = async (req, res, next) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const { error, value } = updateBookSchema.validate({
      ...req.body,
      image: req.files?.image[0]?.filename,
      bookFile: req.files?.bookFile[0]?.filename,
    });
    if (error)
      return res
        .status(422)
        .json({ errors: error.details.map((err) => err.message) });
    const book = await BookModel.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

// Delete a book
export const deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await BookModel.findByIdAndDelete(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    next(err);
  }
};
