import { addBookSchema, updateBookSchema } from "../validators/librarymgtsystem.js";
import { BookModel } from "../models/librarymgtsystem.js";

/// 📌 Add a new book (With Validation)
export const createBook = async (req, res) => {
  const { error, value } = addBookSchema.validate(req.body, { abortEarly: false });
  if (error)
    return res
      .status(422)
      .json({ errors: error.details.map((err) => err.message) });

  try {
    res.status(201).json(await BookModel.create(value));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📌 Fetch all books
export const getBooks = async (req, res) => {
  res.json(await BookModel.find());
};

// 📌 Get a single book by ID
export const getBookById = async (req, res) => {
  const book = await BookModel.findById(req.params.id);
  book ? res.json(book) : res.status(404).json({ error: "Book not found" });
};

// 📌 Update a book (With Validation)
export const updateBook = async (req, res) => {
  const { error, value } = updateBookSchema.validate(req.body, { abortEarly: false });
  if (error)
    return res
      .status(422)
      .json({ errors: error.details.map((err) => err.message) });

  const book = await BookModel.findByIdAndUpdate(req.params.id, value, {
    new: true,
  });
  book ? res.json(book) : res.status(404).json({ error: "Book not found" });
};

// 📌 Remove a book
export const deleteBook = async (req, res) => {
  const book = await BookModel.findByIdAndDelete(req.params.id);
  book
    ? res.json({ message: "Book deleted" })
    : res.status(404).json({ error: "Book not found" });
};
